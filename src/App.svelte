<script>
  import { csvParse } from "d3-dsv";
  import { ascending, groups } from "d3-array";

  import { showName } from "./config";

  import Header from "./Header.svelte";
  import TrackNav from "./TrackNav.svelte";
  import Intro from "./Intro.svelte";
  import Works from "./Works.svelte";
  import Tracks from "./Tracks.svelte";

  let works = [];

  fetch("data/works.csv")
    .then(d => d.text())
    .then(csvParse)
    .then(d => {
      works = d;
      console.log(works);
    });
</script>

<svelte:head>
  <title>{showName}</title>
  <meta name="theme-color" content="#333333" />
</svelte:head>

<Header />
<TrackNav />

<section class="section">
  <div class="container">

    <Intro />

    <Tracks {works} />
    <!-- <Works {works} {tracks} /> -->

  </div>
</section>
