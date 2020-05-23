<script>
  export let work;
</script>

<style>
  .card {
    margin-top: 2em;
  }

  .social-profile {
    white-space: nowrap;
  }

  time {
    font-weight: bold;
  }

  .track {
    padding: 0.1em 1em;
  }
</style>

<div class="card" name={work.slug}>
  <div class="card-image">
    <figure class="image is-2by1">
      <img src={work.thumbUrl} alt={work.title} loading="lazy" />
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <p class="title is-4">{work.title}</p>
      <a href="#schedule">
        {#if work.track}
          <div>
            Track:
            <span class="track {work.track.slug}-bg">{work.track.name}</span>
          </div>
        {/if}
        <div>
          Start time:
          <time datetime="2016-1-1">{work.date}</time>
        </div>
      </a>
      <div>{work.desc || 'No description provided'}</div>
      <div>
        <a href="#">#keywords</a>
        <a href="#">#themes</a>
      </div>
    </div>

    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            src="https://lorempixel.com/96/96/cats/"
            alt={work.artist}
            loading="lazy" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-5">{work.artist}</p>
        <div class="social-profile">
          IG:
          <a href="https://instagram.com/johnsmith">@{work.instagram}</a>
        </div>
        <div class="social-profile">
          TW:
          <a href="https://twitter.com/johnsmith">@{work.twitter}</a>
        </div>
        <div class="social-profile">
          www:
          <a href="https://www.johnsmith.com">{work.website}</a>
        </div>
      </div>
    </div>

  </div>
</div>
