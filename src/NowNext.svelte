<script>
  import { formatTime } from "./helpers.js";
  import { tick } from "./stores.js";

  export let track;

  const TEN_MINS = 10 * 60 * 1000;
  const TWO_HOURS = 2 * 60 * 60 * 1000;

  //   $: {
  //     console.log(track);
  //   }

  $: dayStarted = track.day.startDate - $tick < TWO_HOURS;
  $: dayEnded = track.day.startDate - $tick < TWO_HOURS;

  $: ready = $tick && track.performances.length && dayStarted;

  $: hasStarted = ready && track.performances[0].startTime < $tick;

  $: currentIdx = track.performances.findIndex(
    d => d.startTime <= $tick && d.endTime < $tick
  );

  $: nextPerformance =
    currentIdx >= 0 && currentIdx < track.performances.length - 2
      ? track.performances[currentIdx + 2]
      : null;

  $: currentPerformance =
    currentIdx >= 0 ? track.performances[currentIdx] : null;
</script>

<div>
  {#if ready}
    {#if !hasStarted}
      Starts at {formatTime(nextPerformance.startTime)}:
      <a href="#{nextPerformance.work.slug}">{nextPerformance.work.title}</a>
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
