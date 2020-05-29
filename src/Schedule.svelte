<script>
  import { ascending } from "d3-array";

  import { formatDate, formatTime, formatDateTime } from "./helpers.js";
  import { performanceDays, trackBySlug } from "./config.js";
  import { isActive } from "./helpers.js";
  import { selectedTrack, selectedDay, performances, tick } from "./stores.js";

  $: selectedTrackPerformances = $performances.filter(
    d => d.track.slug === $selectedTrack
  );
</script>

<style>
  .panel-heading,
  .panel-heading a:hover {
    color: white;
  }

  .panel-heading a {
    color: #ccc;
  }

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

  .performance {
    border-left: 16px solid #fff;
  }

  .performance.is-active {
    border-top: 1px solid black;
  }

  .performance.is-active .project-title {
    font-weight: bold;
  }
</style>

<h2 name="schedule" class="title is-2">Schedules</h2>

<div class="content">
  <p />
  <p>
    We aim to stick to the schedule below. All times are in your local timezone,
    where the time is currently {formatDateTime($tick)}.
  </p>
</div>

<div class="anchor-link" id="schedule" />
<nav class="panel">
  <p class="panel-heading {$selectedTrack}-bg">
    {trackBySlug.get($selectedTrack).name} Schedule
    <br />
    <span style="white-space: nowrap">
      {#if trackBySlug.get($selectedTrack).zoomUrl}
        <a
          href={trackBySlug.get($selectedTrack).zoomUrl}
          target="_blank"
          on:click={() => {
            ga('send', 'event', 'Click', `Zoom`, trackBySlug.get($selectedTrack).name);
          }}>
          {trackBySlug.get($selectedTrack).zoomUrl}
        </a>
      {:else}Zoom link will appear here shortly before event{/if}
    </span>
  </p>

  {#each selectedTrackPerformances as performance, i}
    <a
      href="#{performance.work.slug}"
      class="panel-block performance"
      class:is-active={isActive(performance, $tick)}
      style="border-color: {isActive(performance, $tick) ? trackBySlug.get($selectedTrack).color : '#fff'}">
      <time>{formatTime(performance.startTime)}</time>
      <span class="project-title">{performance.work.title}</span>
      <span class="artist is-hidden-mobile">
        &nbsp;—&nbsp; {performance.work.artist}
      </span>
    </a>
  {/each}
</nav>
