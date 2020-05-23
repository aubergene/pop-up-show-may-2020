<script>
  import { ascending, groups } from "d3-array";
  import WorkCard from "./WorkCard.svelte";

  export let works;

  let blah;
  $: {
    blah = groups(works, d => d.slug);
    console.log(blah);
  }

  // $: allowedWorks = works.filter(d => d.thumbUrl);
  $: allowedWorks = works.slice();

  $: worksSorted = groups(allowedWorks, d => d.slug).sort((a, b) =>
    ascending(a[0], b[0])
  );
</script>

<style>
  .works {
    margin-top: 4em;
  }
</style>

<div class="works">
  <h2 class="title is-2">Works</h2>
  <p class="subtitle is-7">In alphabetical order by title</p>

  {#each worksSorted as [slug, works], i}
    <WorkCard work={works[0]} />
  {/each}
</div>
