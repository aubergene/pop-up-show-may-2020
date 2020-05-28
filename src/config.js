import { slugify2 } from "./helpers";

export const showName = "Can Everyone See My Screen?";

export const performanceDays = [
  {
    startDate: new Date(Date.UTC(2020, 4, 29, 17, 0, 0)),
    endDate: new Date(Date.UTC(2020, 4, 29, 19, 30, 0)),
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
    startDate: new Date(Date.UTC(2020, 4, 30, 13, 0, 0)),
    endDate: new Date(Date.UTC(2020, 4, 30, 15, 30, 0)),
    tracks: [
      {
        name: "Interactive",
        zoomUrl: null,
        desc: "Require and respond to human participation",
        color: "rgb(116,89,116)",
      },
      {
        name: "Sonic Art",
        zoomUrl: null,
        desc: "Audio or audiovisual",
        color: "rgb(75,37,109)",
      },
      {
        name: "3D & VR",
        slug: "vr-3d", // CSS classes can't start with a number
        zoomUrl: null,
        desc: "Three-dimensional visuals and game design",
        color: "rgb(153,150,165)",
        blackText: true,
      },
      {
        shortName: "Data vis & Info Art",
        name: "Data visualization & Information Art",
        zoomUrl: null,
        desc:
          "Graphical representations of data, artistic interpretations of information",
        color: "rgb(38,55,85)",
      },
      {
        name: "Games & Physical computing",
        zoomUrl: null,
        desc: "Electronic systems that sense and respond to external stimuli",
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
    t.performances = [];
    allTracks.push(t);
    trackBySlug.set(t.slug, t);
    if (!t.color) {
      t.color = colors[j];
    }
  });
});
