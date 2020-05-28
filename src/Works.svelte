<script>
  import { ascending, groups } from "d3-array";
  import { chunk } from "lodash-es";
  import WorkCard from "./WorkCard.svelte";
  import { works } from "./stores";

  const NUM_COLUMNS = 3;
  const introSlug = "introduction-to-computational-arts-ma";

  let worksSorted;

  $: if ($works.length) {
    worksSorted = $works.slice().sort((a, b) => ascending(a.slug, b.slug));
    const introIdx = worksSorted.map(d => d.slug).indexOf(introSlug);

    // move to position 0
    worksSorted.splice(0, 0, worksSorted.splice(introIdx, 1)[0]);
  }
  $: worksInCols = chunk(worksSorted, NUM_COLUMNS);
</script>

<style>
  .works {
    margin-top: 4em;
  }
</style>

<div class="works">
  <h2 class="title is-2">All Works</h2>
  <p class="subtitle is-7">In alphabetical order by title</p>

  {#each worksInCols as row}
    <div class="columns">
      {#each row as work}
        <div class="column">
          <WorkCard {work} />
        </div>
      {/each}

      {#each new Array(NUM_COLUMNS - row.length) as filler}
        <div class="column" />
      {/each}
    </div>
  {/each}
</div>
