<script>
  import { ascending } from "d3-array";

  import { formatDate, formatTime, trackEvent } from "./helpers.js";
  import { performanceDays } from "./config.js";
  import { selectedTrack } from "./stores.js";

  import NowNext from "./NowNext.svelte";
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

  <h2 class="title is-2" id="tracks">Tracks</h2>
  <div class="content">
    <p>
      Taking place over the course of two days, online audiences will be able to
      dip in and out of five channels with their own Zoom meeting link. On the
      Friday, discover the works by themes and on Saturday by their technical
      aspect.
    </p>
  </div>

  <div class="columns">
    {#each performanceDays as performanceDay, i}
      <div class="column">
        <h4 class="title is-4" id="day-{i + 1}">
          Day {i + 1} - {formatDate(performanceDay.startDate)}
        </h4>
        <h6 class="subtitle is-6">
          {formatTime(performanceDay.startDate)}-{formatTime(performanceDay.endDate)}
        </h6>
        {#each performanceDay.tracks as track, j}
          <div class="track {track.slug}-bd">

            <div class="content">
              <div class="anchor-link" id={track.slug} />
              <p>
                <b>{track.name}</b>
                {#if track.desc}
                  <br />
                  {track.desc}
                {/if}
                <br />
                {#if track.zoomUrl}
                  <a
                    href={track.zoomUrl}
                    on:click={() => trackEvent('engagement', `click`, `tracks.${track.name}`)}>
                    {track.zoomUrl}
                  </a>
                {:else}Zoom link will appear here shortly before event{/if}
              </p>
              <NowNext {track} />
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>

</div>
