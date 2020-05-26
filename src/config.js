import { slugify2 } from "./helpers";

export const showName = "Can Everyone See My Screen?";

export const performanceDays = [
  {
    date: new Date(Date.UTC(2020, 4, 29)),
    tracks: [
      {
        name: "Sonos",
        zoomUrl: null,
        desc: "sonification, performance",
        color: "rgb(139,0,139)",
      },
      {
        name: "Commixt",
        zoomUrl: null,
        desc: "human relationships with technology, digital identities",
        color: "rgb(178,76,101)",
      },
      {
        name: "Terra",
        zoomUrl: null,
        desc: "of this world, ecology",
        color: "rgb(191,113,130)",
      },
      {
        name: "Locus",
        zoomUrl: null,
        desc: "expanded space/time/digital worlds",
        color: "rgb(217,131,150)",
      },
      {
        name: "Opt",
        zoomUrl: null,
        desc: "Agency and choice",
        color: "rgb(145, 19, 43)",
      },
      {
        name: "Proximity",
        zoomUrl: null,
        desc: "togetherness and isolation",
        color: "rgb(78,8,52)",
      },
    ],
  },

  {
    date: new Date(Date.UTC(2020, 4, 30)),
    tracks: [
      {
        name: "Interactive",
        zoomUrl: null,
        desc: null,
        color: "rgb(116,89,116)",
      },
      {
        name: "Sonic Art",
        zoomUrl: null,
        desc: null,
        color: "rgb(75,37,109)",
      },
      {
        name: "3D & VR",
        slug: "vr-3d", // CSS classes can't start with a number
        zoomUrl: null,
        desc: null,
        color: "rgb(153,150,165)",
        blackText: true,
      },
      {
        shortName: "Data vis & Info Art",
        name: "Data visualization & Information Art",
        zoomUrl: null,
        desc: null,
        color: "rgb(38,55,85)",
      },
      {
        name: "Games & Physical computing",
        zoomUrl: null,
        desc: null,
        color: "rgb(138,43,226)",
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
