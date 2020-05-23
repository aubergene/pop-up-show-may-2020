<script>
  import { csvParse } from "d3-dsv";
  import { ascending, groups } from "d3-array";

  import { showName, allTracks, performanceDays } from "./config";

  import Header from "./Header.svelte";
  import TrackNav from "./TrackNav.svelte";
  import Intro from "./Intro.svelte";
  import Works from "./Works.svelte";
  import Tracks from "./Tracks.svelte";
  import Schedule from "./Schedule.svelte";

  let works = [];

  fetch("data/works.csv")
    .then(d => d.text())
    .then(csvParse)
    .then(rows => {
      rows.forEach(row => {
        row.track = allTracks[row.trackId];
        // console.log(row.trackId);

        const d = performanceDays[row.day - 1].date;
        const [hours, mins] = row.startUTC.split(":");
        row.date = new Date(
          Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), hours, mins, 0)
        );
        // console.log(row.date);

        if (row.thumbUrl) {
          if (/\/a\//.exec(row.thumbUrl)) {
            row.thumbUrl = null;
          } else {
            row.thumbUrl =
              row.thumbUrl.replace("//imgur", "//i.imgur") + ".png";
          }
        }
      });

      works = rows;

      console.log(works);
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

    <!-- 

    {#each thumbs as thumb}
      <a href={thumb.thumbUrl} target="_blank">{thumb.thumbUrl}</a>
      <br />
    {/each}

    {#each thumbs as thumb}
      <img src={thumb.thumbUrl.replace('//imgur', '//i.imgur') + '.png'} />
      <br />
    {/each}
 -->

    <Tracks />
    <Schedule {works} />
    <Works {works} />

  </div>
</section>
