<script>
  import { ascending } from "d3-array";

  import { formatTime } from "./helpers.js";
  import { performanceDays, trackBySlug } from "./config.js";
  import { selectedTrack } from "./stores.js";

  export let works;

  $: selectedTrackWorks = works.filter(d => d.track.slug === $selectedTrack);
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
    We aim to stick to the schedule below. All times are in your local timezone.
  </p>
</div>

<nav class="panel">
  <p class="panel-heading {$selectedTrack}-bg">
    {trackBySlug.get($selectedTrack).name} Schedule
  </p>

  {#each selectedTrackWorks as work, i}
    <a
      href="#{work.slug}"
      class="panel-block"
      class:is-past={i < 3}
      class:is-active={i == 3}>
      <time>{work.startTime}</time>
      <time>{formatTime(work.date)}</time>
      <span class="project-title">{work.title}</span>
      <span class="artist is-hidden-mobile">&nbsp;—&nbsp; {work.artist}</span>
    </a>
  {/each}
</nav>
