<script>
  import SocialLink from "./SocialLink.svelte";

  export let work;

  const placeholderUrl = "https://via.placeholder.com/1000x500";
</script>

<style>
  .card {
    margin-top: 2em;
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
      <img
        src={work.thumbUrl || placeholderUrl}
        alt={work.title}
        loading="lazy" />
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <h4 class="title is-4">{work.title}</h4>

      <div>
        <span class="tag">{work.form}</span>
      </div>

      <ul>
        {#each work.performances as p}
          <li>
            <div>
              Track:
              <span class="track {p.track.slug}-bg">{p.track.name}</span>
            </div>
            <div>
              Start time:
              <time datetime={p.startTime.toISOString()}>{p.startTime}</time>
            </div>
          </li>
        {/each}
      </ul>

      <div>{work.desc || 'No description provided'}</div>
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
        <SocialLink kind="instagram" value={work.instagram} />
        <SocialLink kind="twitter" value={work.twitter} />
        <SocialLink kind="website" value={work.website} />
      </div>
    </div>

  </div>
</div>
