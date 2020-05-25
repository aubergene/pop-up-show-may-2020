import { writable, readable, derived } from "svelte/store";
import { allTracks, performanceDays, trackBySlug } from "./config";
import { csvParse } from "d3-dsv";

const placeholderImageUrl = "placeholder.png";

export const selectedTrack = writable(allTracks[0].slug);

export const selectedDay = derived(selectedTrack, ($selectedTrack, set) => {
  console.log($selectedTrack);
  set(trackBySlug.get($selectedTrack).day);
});

export const works = writable([]);
export const performances = writable([]);

export function loadData() {
  return fetch("data/works.csv")
    .then((d) => d.text())
    .then(csvParse)
    .then((rows) => {
      const worksBySlug = new Map();
      const performanceList = [];

      rows.forEach((row) => {
        row.track = allTracks[row.trackId];
        // console.log(row.trackId);

        row.thumbUrl = row.imgur
          ? `https://i.imgur.com/${row.imgur}.png`
          : placeholderImageUrl;

        let work;
        const performance = {
          startTime: makeStartTime(row),
          track: row.track,
        };
        performanceList.push(performance);

        if (worksBySlug.has(row.slug)) {
          work = worksBySlug.get(row.slug);
          work.performances.push(performance);
        } else {
          work = row;
          work.performances = [performance];
          worksBySlug.set(work.slug, work);
        }

        performance.work = work;

        delete work.track;
        delete work.startUTC;
      });

      // console.log(rows);

      works.set(Array.from(worksBySlug.values()));
      performances.set(performanceList);

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

export const tick = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => clearInterval(interval);
});
