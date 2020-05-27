<script>
  import { selectedTrack } from "./stores.js";
  import { showName, performanceDays } from "./config.js";

  const formatTime = new Intl.DateTimeFormat([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit"
  }).format;

  const formatDate = new Intl.DateTimeFormat([], {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format;

  function clearHash() {
    history.pushState("", document.title, window.location.pathname);
  }
</script>

<style>
  h1 {
    color: white;
  }
  h2 {
    color: #ddd;
  }
</style>

<section class="hero {$selectedTrack}-bg" on:click={clearHash}>
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{showName}</h1>
      <h2 class="subtitle">
        Work in Progress Show - Goldsmiths
        {#each performanceDays as performanceDay}
          <br />
          {formatTime(performanceDay.startDate)} — {formatTime(performanceDay.endDate)}
          {formatDate(performanceDay.endDate)}
        {/each}
      </h2>
    </div>
  </div>
</section>
