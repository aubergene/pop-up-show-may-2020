<script>
  import { formatTime } from "./helpers.js";
  import { tick } from "./stores.js";
  import { PERFORMANCE_LENGTH } from "./config.js";

  export let track;

  $: ready = $tick && track.performances.length;

  let hasStarted;

  $: if (ready) hasStarted = track.performances[0].startTime < $tick;

  $: currentPerformance = track.performances.find(
    d => d.startTime <= $tick && $tick < d.endTime
  );

  $: nextPerformance = track.performances.find(d => {
    const n = new Date(PERFORMANCE_LENGTH + $tick.getTime());
    return d.startTime <= n && n < d.endTime;
  });
</script>

<div>
  {#if ready}
    {#if !hasStarted}
      {#if nextPerformance}
        Starts at {formatTime(nextPerformance.startTime)}:
        <a href="#{nextPerformance.work.slug}">{nextPerformance.work.title}</a>
      {/if}
    {:else}
      {#if currentPerformance}
        <b>Now:</b>
        <a href="#{currentPerformance.work.slug}">
          {currentPerformance.work.title}
        </a>
        <br />
      {/if}
      {#if nextPerformance}
        Next at {formatTime(nextPerformance.startTime)}:
        <a href="#{nextPerformance.work.slug}">{nextPerformance.work.title}</a>
      {/if}
    {/if}
  {/if}
</div>
