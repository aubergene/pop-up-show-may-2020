import fs from "fs";
import path from "path";
import { csvParse, csvParseRows, csvFormat, autoType } from "d3-dsv";
import slugify from "slugify";
import { pick } from "lodash";
import { allTracks } from "../src/config";
import { slugify2 } from "../src/helpers";

const projects = [];

// being pretty strict about what chars I allow in slugs
const BAD_SLUG_CHARS = /[*+~,.()'"!:@?/#_\[\]]/g;
const toSlug = (str) => slugify(str, { lower: true, remove: BAD_SLUG_CHARS });

const allTrackNames = allTracks.map((d) => d.name);
// console.log(allTrackNames);

const rawDir = `${__dirname}/../raw/`;
const scheduleFiles = [
  "Pop up show timetable - May 2020 - 2020-05-29.csv",
  "Pop up show timetable - May 2020 - 2020-05-30.csv",
];

const worksFile = `${rawDir}Pop-up exhibition, final form (Responses) - Form responses 1.csv`;
const works = csvParseRows(fs.readFileSync(worksFile, "utf-8"), (d, i) => {
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

const worksByTitle = new Map();

works.forEach((row) => {
  Object.keys(row).forEach((k) => {
    if (typeof row[k] === "string") {
      row[k] = row[k].trim();
    }
  });

  const workSlug = toSlug(row.title);
  worksByTitle.set(workSlug, row);
});

// console.log(worksByTitle);

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
    startTime
    startUTC
    artist
    title
    slug
    form
    desc
    thumbUrl
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
