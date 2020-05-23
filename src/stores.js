import { writable } from "svelte/store";
import { allTracks, performanceDays } from "./config";
import { csvParse } from "d3-dsv";

const placeholderImageUrl = "https://via.placeholder.com/1000x500";

export const selectedTrack = writable(allTracks[0].slug);

export const works = writable([]);

export function loadData() {
  return fetch("data/works.csv")
    .then((d) => d.text())
    .then(csvParse)
    .then((rows) => {
      const worksBySlug = new Map();

      rows.forEach((row) => {
        row.track = allTracks[row.trackId];
        // console.log(row.trackId);

        row.thumbUrl = row.imgur
          ? `https://i.imgur.com/${row.imgur}.png`
          : placeholderImageUrl;

        let work;
        if (worksBySlug.has(row.slug)) {
          work = worksBySlug.get(row.slug);
          work.performances.push({
            startTime: makeStartTime(row),
            track: row.track,
          });
        } else {
          work = row;
          work.performances = [
            {
              startTime: makeStartTime(row),
              track: row.track,
            },
          ];
          worksBySlug.set(work.slug, work);
        }
      });

      console.log(rows);

      works.set(Array.from(worksBySlug.values()));

      return rows;
    });
}

function makeStartTime(work) {
  const d = performanceDays[work.day - 1].date;
  const [hours, mins] = work.startUTC.split(":");
  return new Date(
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), hours, mins, 0)
  );
}

function fixThumb(work) {
  if (work.thumbUrl || /\/a\//.exec(work.thumbUrl)) {
    return null;
  }
  return work.thumbUrl.replace("//imgur", "//i.imgur") + ".png";
}
