<script>
  import { selectedTrack } from "./stores.js";
  import { showName } from "./config.js";
</script>

<style>
  h1 {
    color: white;
  }
  h2 {
    color: #ddd;
  }
</style>

<section class="hero {$selectedTrack}-bg">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{showName}</h1>
      <h2 class="subtitle">
        Work in Progress Show - Goldsmiths
        <br />
        18:00 — 20:30 Fri 29 May 2020
        <br />
        14:00 — 16:30 Sat 30 May 2020
      </h2>
    </div>
  </div>
</section>
