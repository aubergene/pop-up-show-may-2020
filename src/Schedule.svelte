<script>
  import { ascending } from "d3-array";

  import { performanceDays } from "./config.js";
  import { selectedTrack, selectedTrack } from "./stores.js";

  export let works;

  $: tracks = $selectedDay.tracks;

  $: projectsSorted = works
    .slice()
    .sort((a, b) => ascending(a.startTime, b.startTime));
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

  .track-border {
    border-left-width: 1em;
    border-left-style: solid;
    padding-left: 0.5em;
  }
</style>

<div class="tracks">

  <h2 class="title is-2">Tracks</h2>
  <div class="content">
    <p>
      The show is split in to the following {tracks.length} tracks. Each track
      has its own Zoom meeting link.
    </p>
  </div>

  {#each tracks as track, i}
    <article class="media">
      <div class="media-content track-border {track.name}-bd">
        <h2 class="title is-4">{track.name}</h2>
        <h6 class="subtitle is-7">{track.desc}</h6>

        <div class="content">
          <p>
            <a href={track.zoomUrl}>{track.zoomUrl}</a>
          </p>
        </div>
      </div>
    </article>
  {/each}

  <div class="content">
    <p />
    <p>
      We aim to stick to the schedule below. All times are in 24 hour format for
      British Summer Time (UTC+1).
    </p>
  </div>

  <nav class="panel">
    <a class="anchor-link" name="schedule" />
    <p class="panel-heading {$selectedTrack}-bg">{$selectedTrack} Schedule</p>

    <p class="panel-tabs">
      <a class="is-active">Fri 29 May 2020</a>
      <a>Sat 30 May 2020</a>
    </p>

    <!-- 

    <label class="panel-block">
      <input type="checkbox" checked />
      hide events in the past
    </label>
 -->

    {#each projects as project, i}
      <a
        href="#{project.slug}"
        class="panel-block"
        class:is-past={i < 3}
        class:is-active={i == 3}>
        <span class="panel-icon is-hidden-mobile">
          <i class="fas fa-code-branch" aria-hidden="true" />
        </span>
        <time>{project.startTime}</time>
        <span class="project-title">{project.title}</span>
        <span class="artist is-hidden-mobile">
          &nbsp;—&nbsp; {project.artist}
        </span>
      </a>
    {/each}
  </nav>

</div>
