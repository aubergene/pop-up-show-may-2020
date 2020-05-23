<script>
  import { ascending } from "d3-array";

  import { formatDate } from "./helpers.js";
  import { performanceDays } from "./config.js";
  import { selectedTrack } from "./stores.js";
</script>

<style>
  .track {
    border-left-width: 1em;
    border-left-style: solid;
    padding-left: 0.5em;
    min-height: 5em;
    margin-bottom: 1em;
  }
</style>

<div class="tracks">

  <h2 class="title is-2">Tracks</h2>
  <div class="content">
    <p>
      The show is over two days and split into the following tracks. Each track
      has its own Zoom meeting link.
    </p>
  </div>

  {#each performanceDays as performanceDay, i}
    <h3 class="title is-4">Day {i + 1} - {formatDate(performanceDay.date)}</h3>
    {#each performanceDay.tracks as track, j}
      <div class="track {track.slug}-bd">

        <div class="content">
          <p>
            <b>{track.name}</b>
            {#if track.desc}
              <br />
              {track.desc}
            {/if}
            <br />
            <a href={track.zoomUrl}>{track.zoomUrl}</a>
          </p>
        </div>
      </div>
    {/each}
  {/each}

</div>
