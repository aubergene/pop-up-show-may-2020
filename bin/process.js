import fs from "fs";
import path from "path";
import { csvParse, csvParseRows, csvFormat, autoType } from "d3-dsv";
import slugify from "slugify";
import { pick } from "lodash";
import { allTracks } from "../src/config";
import { slugify2 } from "../src/helpers";
import fetch from "node-fetch";
import PQueue from "p-queue";

const imgurClientID = "cf9c0dd51e1126b";
const BAD_SLUG_CHARS = /[*+~,.()'"!:@?/#_\[\]]/g; // being pretty strict about what chars I allow in slugs
const toSlug = (str) => slugify(str, { lower: true, remove: BAD_SLUG_CHARS });

const rawDir = `${__dirname}/../raw/`;
const scheduleFiles = [
  "Pop up show timetable - May 2020 - 2020-05-29.csv",
  "Pop up show timetable - May 2020 - 2020-05-30.csv",
];
const worksFile = `${rawDir}Pop-up exhibition, final form (Responses) - Form responses 1.csv`;

const queue = new PQueue({ concurrency: 6 });
const projects = [];
const allTrackNames = allTracks.map((d) => d.name);
let works;
const worksByTitle = new Map();

// console.log(allTrackNames);

loadWorks().then(loadSchedules).then(output);

async function loadWorks() {
  works = csvParseRows(fs.readFileSync(worksFile, "utf-8"), (d, i) => {
    // The column headers (row 0) are garbage so do it manually
    if (i === 0) return null;
    return {
      row: i + 1,
      artist: d[1],
      officialName: d[2],
      title: d[3],
      desc: d[4],
      thumbUrl: d[5],
      url: d[6],
      website: d[7],
      instagram: d[8],
      twitter: d[9],
      facebook: d[10],
    };
  });

  // console.log(works);

  await queue.addAll(
    works.map((row) => async () => {
      Object.keys(row).forEach((k) => {
        if (typeof row[k] === "string") {
          row[k] = row[k].trim();
        }
      });

      const workSlug = toSlug(row.title);

      row.instagram = row.instagram
        .replace(/https:\/\/(www.)?instagram.com\//, "")
        .replace(/\/$/, "")
        .replace("@", "");

      row.twitter = row.twitter
        .replace(/https:\/\/(www.)?twitter.com\//, "")
        .replace(/\/$/, "")
        .replace("@", "");

      row.imgur = await getImgur(row);

      worksByTitle.set(workSlug, row);
    })
  );
}

// console.log(worksByTitle);

async function loadSchedules() {
  scheduleFiles.forEach((file, day) => {
    const filePath = path.resolve(rawDir + file);
    const rows = csvParse(fs.readFileSync(filePath, "utf-8"), autoType);

    rows.forEach((row, i) => {
      row.row = i + 1;

      if (!row.title) return;

      row.trackId = allTrackNames.indexOf(row.track);
      if (row.trackId < 0) {
        console.warn(`Bad track "${row.track}" row ${i + 1} in ${file}`);
      }

      Object.keys(row).forEach((k) => {
        if (typeof row[k] === "string") {
          row[k] = row[k].trim();
        }
      });

      row.day = day + 1;
      row.slug = toSlug(row.title);

      const [hour, min] = row.startTime.split(":");
      row.startUTC = [hour - 1, min].join(":"); // quick hack

      if (worksByTitle.has(row.slug)) {
        const work = worksByTitle.get(row.slug);
        work.used = true;
        row.matched = true;
        Object.assign(row, work);
      }

      projects.push(row);
    });
  });
}

function output() {
  const unmatchedProjects = projects.filter((d) => !d.matched);
  console.log("Projects which don't have work");
  console.log(
    unmatchedProjects
      .map((d) => {
        return `Day ${d.day}\tRow ${d.row}\t${d.slug}`;
      })
      .join("\n")
  );
  console.log("Total", unmatchedProjects.length);
  console.log();
  console.log();

  const unusedWorks = works.filter((d) => !d.used);
  console.log("Works which don't match a scheduled event");
  console.log(
    unusedWorks
      .map((d) => {
        return `Row ${d.row}\t${d.title} - ${d.officialName}`;
      })
      .join("\n")
  );
  console.log("Total", unusedWorks.length);

  const headers = `
    day
    trackId
    startUTC
    artist
    title
    slug
    form
    desc
    thumbUrl
    imgur
    url
    website
    instagram
    twitter
    facebook
    module
`
    .trim()
    .split("\n")
    .map((d) => d.trim());

  // console.log(headers);

  const out = projects.map((d) => pick(d, headers));

  const publicDir = path.resolve(`${__dirname}/../public/`);
  const projectsPath = `${publicDir}/data/works.csv`;
  fs.mkdirSync(path.dirname(projectsPath), { recursive: true });
  fs.writeFileSync(projectsPath, csvFormat(out));

  const cssColors = allTracks
    .map((track) => {
      const slug = slugify2(track.name);
      return `
.${slug}-bg {
  background-color: ${track.color};
}
.${slug}-bd {
  border-color: ${track.color};
}
  `.trim();
    })
    .join("\n");

  const cssColorsPath = `${publicDir}/colors.css`;
  fs.writeFileSync(cssColorsPath, cssColors);
}

var requestOptions = {
  method: "GET",
  headers: {
    Authorization: `Client-ID ${imgurClientID}`,
  },
};

async function getImgur(work) {
  const url = work.thumbUrl.trim();

  if (!url) return null;

  if (/\/a\//.exec(url)) {
    return getAlbumLink(url).catch((error) => {
      console.error(`Error fetching ${url} - row ${work.row}`);
      console.error(error);
    });
  }

  return path.basename(url).replace(/\..*/, "");
}

function getAlbumLink(albumUrl) {
  const albumHash = path.basename(albumUrl);
  console.log(`fetching ${albumHash} — ${albumUrl}`);
  return fetch(
    `https://api.imgur.com/3/album/${albumHash}/images`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => path.basename(result.data[0].link).replace(/\..*/, ""));
}
