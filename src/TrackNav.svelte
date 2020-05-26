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

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .item {
    color: black;
    background: #eee;
    padding: 0.3em 1em;
    cursor: pointer;
    flex-grow: 0;
    min-width: 140px;
  }

  .item-track {
    border-width: 0;
    border-left-width: 8px;
    border-style: solid;
    background-color: #eee;
  }

  .is-active {
    font-weight: bold;
    color: white;
  }
</style>

<div class="track-nav">
  <div class="container">
    <div class="row days">
      {#each performanceDays as performanceDay}
        <a
          href="#schedule"
          class="item item-day {performanceDay === $selectedDay ? `${$selectedTrack}-bg` : ''}"
          class:is-active={performanceDay === $selectedDay}
          on:click={() => {
            selectedTrack.set(performanceDay.tracks[0].slug);
          }}>
          {formatDate(performanceDay.date)}
        </a>
      {/each}
    </div>

    <div class="row tracks">
      {#each tracks as track}
        <a
          href="#schedule"
          class="item item-track {track.slug}-bd {track.slug}-{track.slug === $selectedTrack ? 'bg' : ''}"
          class:is-active={track.slug === $selectedTrack}
          on:click={() => selectedTrack.set(track.slug)}>
          {track.shortName || track.name}
        </a>
      {/each}
    </div>

  </div>
</div>
