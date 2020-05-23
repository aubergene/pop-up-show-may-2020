<script>
  import { ascending } from "d3-array";

  import { formatTime, formatDateTime } from "./helpers.js";
  import { performanceDays, trackBySlug } from "./config.js";
  import { selectedTrack, performances, tick } from "./stores.js";

  $: selectedTrackPerformances = $performances.filter(
    d => d.track.slug === $selectedTrack
  );
</script>

<style>
  .track-name {
    padding: 0.1em 0.5em;
    cursor: pointer;
  }

  time {
    margin-right: 8px;
  }

  .artist {
    font-style: italic;
  }

  .is-past time {
    text-decoration: line-through;
  }

  .is-past .project-title,
  .is-past .artist {
    color: lightgray;
  }

  .is-active {
    border-top: 1px solid black;
  }

  .is-active .project-title {
    font-weight: bold;
  }
</style>

<h2 name="schedule" class="title is-2">Schedule</h2>

<div class="content">
  <p />
  <p>
    We aim to stick to the schedule below. All times are in your local timezone,
    where the time is currently {formatDateTime($tick)}.
  </p>
</div>

<nav class="panel">
  <p class="panel-heading {$selectedTrack}-bg">
    {trackBySlug.get($selectedTrack).name} Schedule
  </p>

  {#each selectedTrackPerformances as performance, i}
    <a
      href="#{performance.work.slug}"
      class="panel-block"
      class:is-past={i < 3}
      class:is-active={i == 3}>
      <time>{formatTime(performance.startTime)}</time>
      <span class="project-title">{performance.work.title}</span>
      <span class="artist is-hidden-mobile">
        &nbsp;—&nbsp; {performance.work.artist}
      </span>
    </a>
  {/each}
</nav>
