<script>
  import { ascending, groups } from "d3-array";

  import { showName, allTracks, performanceDays } from "./config";
  import { loadData } from "./stores";

  import Header from "./Header.svelte";
  import TrackNav from "./TrackNav.svelte";
  import Intro from "./Intro.svelte";
  import Works from "./Works.svelte";
  import Tracks from "./Tracks.svelte";
  import Schedule from "./Schedule.svelte";

  let works = [];

  loadData().then(data => {
    works = data;
  });

  $: thumbs = works.filter(d => d.thumbUrl);
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

    <Tracks />
    <Schedule />
    <Works />

  </div>
</section>
