import { slugify2 } from "./helpers";

export const showName = "Can Everyone See My Screen?";

export const performanceDays = [
  {
    date: new Date(Date.UTC(2020, 4, 29)),
    tracks: [
      {
        name: "Sonos",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Sonos",
        desc: "sonification, performance",
        color: "#74A4BC",
      },
      {
        name: "Commixt",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Commixt",
        desc: "human relationships with technology, digital identities",
        color: "#e8b9ab",
      },
      {
        name: "Terra",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Terra",
        desc: "of this world, ecology",
        color: "#98b9ab;",
      },
      {
        name: "Locus",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Locus",
        desc: "expanded space/time/digital worlds",
        color: "#d2e4c4;",
      },
      {
        name: "Opt",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Opt",
        desc: "Agency and choice",
        color: "#b9c0da;",
      },
      {
        name: "Proximity",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Opt",
        desc: "togetherness and isolation",
        color: "#d1b3c4;",
      },
    ],
  },

  {
    date: new Date(Date.UTC(2020, 4, 30)),
    tracks: [
      {
        name: "Interactive",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Sonos",
        desc: null,
        color: "#E53D00",
      },
      {
        name: "Sonic Art",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Commixt",
        desc: null,
        color: "#E637BF",
      },
      {
        name: "3D & VR",
        slug: "vr-3d", // CSS classes can't start with a number
        zoomUrl: "https://zoom.us/j/EXAMPLE-Terra",
        desc: null,
        color: "#00C2D1",
      },
      {
        shortName: "Data vis & Info Art",
        name: "Data visualization & Information Art",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Locus",
        desc: null,
        color: "#F9E900",
      },
      {
        name: "Games & Physical computing",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Opt",
        desc: null,
        color: "#533A71",
      },
    ],
  },
];

export const allTracks = [];
export const trackBySlug = new Map();
let trackId = 0;

performanceDays.forEach((day, i) => {
  day.id = i;
  day.tracks.forEach((t, j) => {
    t.id = trackId++;
    t.day = day;
    t.slug = slugify2(t.name);
    allTracks.push(t);
    trackBySlug.set(t.slug, t);
    if (!t.color) {
      t.color = colors[j];
    }
  });
});
