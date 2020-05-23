<script>
  import { selectedTrack } from "./stores.js";
  import { performanceDays } from "./config.js";

  let tabs = performanceDays[0].tracks;
</script>

<style>
  .track-nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
  }

  a {
    padding: 0.5em 0.95em;
    flex-grow: 1;
  }

  .active {
    font-weight: bold;
  }
</style>

<div class="track-nav tabs is-centered">
  <ul>
    {#each tabs as tab}
      <li class="{tab.slug}-bg" class:active={$selectedTrack === tab.slug}>
        <a on:click={() => selectedTrack.set(tab.slug)}>{tab.name}</a>
      </li>
    {/each}
  </ul>
</div>
