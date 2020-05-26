<script>
  import { selectedTrack, selectedDay } from "./stores.js";
  import { formatDate } from "./helpers.js";
  import { showName, performanceDays, trackBySlug } from "./config.js";

  let tabs = performanceDays[0].tracks;

  $: tracks = trackBySlug.get($selectedTrack).day.tracks;
</script>

<style>
  .track-nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    border-bottom: 2px solid #ccc;
  }

  a {
    padding: 0.5em 0.95em;
    flex-grow: 1;
  }

  .active {
    font-weight: bold;
  }

  .item {
    padding: 0.5em 1em;
    cursor: pointer;
    line-height: 2.15em;
    white-space: nowrap;
  }

  .day {
    color: black;
  }

  .is-active {
    color: white;
  }

  .item-track {
    border-style: solid;
    border-width: 6px;
    border-top-width: 0;
    border-bottom-width: 0;
    border-right-width: 0;
  }

  /* .item:not(.is-active) {
    background-color: inherit;
  } */
</style>

<div class="track-nav">
  <div class="container">
    <div class="days">
      {#each performanceDays as performanceDay}
        <a
          href="#schedule"
          class="item day {performanceDay === $selectedDay ? `${$selectedTrack}-bg` : ''}"
          class:is-active={performanceDay === $selectedDay}
          on:click={() => {
            selectedTrack.set(performanceDay.tracks[0].slug);
          }}>
          {formatDate(performanceDay.date)}
        </a>
      {/each}
    </div>

    <div class="tracks">
      {#each tracks as track}
        <a
          href="#schedule"
          class="item item-track {track.slug}-{track.slug === $selectedTrack ? 'bg' : 'fg'}
          {track.slug}-bd"
          class:is-active={track.slug === $selectedTrack}
          on:click={() => selectedTrack.set(track.slug)}>
          {track.shortName || track.name}
        </a>
        <wbr />
      {/each}
    </div>

  </div>
</div>
