import { slugify2 } from "./helpers";

export const showName = "Can Everyone See My Screen?";

export const colors = [
  "coral",
  "chocolate",
  "lawngreen",
  "aquamarine",
  "yellowgreen",
];

export const performanceDays = [
  {
    date: new Date("2020-05-29"),
    tracks: [
      {
        name: "Commixt",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Commixt",
        desc: "human relationships with technology, digital identities",
      },
      {
        name: "Terra",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Terra",
        desc: "of this world, ecology",
      },
      {
        name: "Locus",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Locus",
        desc: "expanded space/time/digital worlds",
      },
      {
        name: "Opt",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Opt",
        desc: "Agency and choice",
      },
      {
        name: "Proximity",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Opt",
        desc: "togetherness and isolation",
      },
      {
        name: "Sonos",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Sonos",
        desc: "sonification, performance",
      },
    ],
  },

  {
    date: new Date("2020-05-30"),
    tracks: [
      {
        name: "Sonic Art",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Commixt",
        desc: null,
      },
      {
        name: "3D & VR",
        slug: "vr-3d", // CSS classes can't start with a number
        zoomUrl: "https://zoom.us/j/EXAMPLE-Terra",
        desc: null,
      },
      {
        name: "Data visualization & Information Art",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Locus",
        desc: null,
      },
      {
        name: "Games & Physical computing",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Opt",
        desc: null,
      },
      {
        name: "Interactive",
        zoomUrl: "https://zoom.us/j/EXAMPLE-Sonos",
        desc: null,
      },
    ],
  },
];

export const allTracks = [];

performanceDays.forEach((day, i) => {
  day.tracks.forEach((t, j) => {
    t.day = i + 1;
    t.slug = slugify2(t.name);
    allTracks.push(t);
    if (!t.color) {
      t.color = colors[j];
    }
  });
});
