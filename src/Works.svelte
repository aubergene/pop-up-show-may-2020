<script>
  import { ascending, groups } from "d3-array";
  import { chunk } from "lodash";
  import WorkCard from "./WorkCard.svelte";
  import { works } from "./stores";

  const NUM_COLUMNS = 2;

  $: worksInCols = chunk($works, NUM_COLUMNS);
</script>

<style>
  .works {
    margin-top: 4em;
  }
</style>

<div class="works">
  <h2 class="title is-2">Works</h2>
  <p class="subtitle is-7">In alphabetical order by title</p>

  {#each worksInCols as row}
    <div class="columns is-mobile">
      {#each row as work}
        <div class="column">
          <WorkCard {work} />
        </div>
      {/each}
    </div>
  {/each}
</div>
