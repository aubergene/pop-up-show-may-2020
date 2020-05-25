<script>
  import { ascending } from "d3-array";

  import { formatDate, formatTime, formatDateTime } from "./helpers.js";
  import { performanceDays, trackBySlug } from "./config.js";
  import { selectedTrack, selectedDay, performances, tick } from "./stores.js";

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

  .performance.is-active {
    border-top: 1px solid black;
  }

  .performance.is-active .project-title {
    font-weight: bold;
  }

  .panel-tabs {
    border-bottom: none;
  }

  .panel-tab {
    padding: 0.5em 1em;
    font-weight: bold;
    cursor: pointer;
  }

  .performance-day-tab:not(.is-active-day) {
    background-color: white;
  }

  .track-switcher {
    display: flex;
    flex-wrap: wrap;
  }

  .track-tab {
    padding: 0.4em 1.2em;
    line-height: 2em;
    white-space: nowrap;
    font-weight: bold;
    cursor: pointer;
    border-style: solid;
    border-width: 6px;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
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

<nav class="panel">
  <p class="panel-heading {$selectedTrack}-bg">
    {trackBySlug.get($selectedTrack).name} Schedule
    <span class="is-hidden-touch">
      —
      <a href={trackBySlug.get($selectedTrack).zoomUrl}>
        {trackBySlug.get($selectedTrack).zoomUrl}
      </a>
    </span>
  </p>

  <p class="panel-tabs">
    {#each performanceDays as performanceDay}
      <span
        class="panel-tab performance-day-tab {$selectedTrack}-bg"
        class:is-active-day={performanceDay.id === $selectedDay}
        on:click={() => {
          selectedDay.set(performanceDay.id);
          selectedTrack.set(performanceDay.tracks[0].slug);
        }}>
        {formatDate(performanceDay.date)}
      </span>
    {/each}
  </p>

  <!-- 
  <div class="panel-tabs">
    Select track:
    <div class="dropdown">
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          {#each performanceDays[$selectedDay].tracks as track}
            <a
              href="#"
              on:click={() => selectedTrack.set(track.slug)}
              class="dropdown-item">
              {track.name}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
   -->

  <!-- 
  <p class="panel-tabs">
    {#each performanceDays[$selectedDay].tracks as track}
      <span
        class="panel-tab track-tab {track.slug}-{track.slug === $selectedTrack ? 'bg' : 'fg'}
        {track.slug}-bd"
        on:click={() => selectedTrack.set(track.slug)}>
        {track.name}
      </span>
    {/each}
  </p>
   -->

  <div class="track-switcher">
    {#each performanceDays[$selectedDay].tracks as track}
      <span
        class="panel-tab track-tab {track.slug}-{track.slug === $selectedTrack ? 'bg' : 'fg'}
        {track.slug}-bd"
        on:click={() => selectedTrack.set(track.slug)}>
        {track.name}
      </span>
    {/each}
  </div>

  {#each selectedTrackPerformances as performance, i}
    <a
      href="#{performance.work.slug}"
      class="panel-block performance"
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
