<script>
  import SocialLink from "./SocialLink.svelte";
  import { formatDateTime, trackEvent } from "./helpers";
  import { selectedTrack } from "./stores";

  export let work;
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
    color: white;
  }

  img {
    object-fit: cover;
    background-color: #ccc;
  }
</style>

<div class="card">
  <div class="card-image">
    <div class="anchor-link" id={work.slug} />
    <figure class="image is-2by1">
      <img
        src={work.thumbUrl}
        alt={work.title}
        width="1000"
        height="500"
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
              <a
                href="#schedule"
                class="track {p.track.slug}-bg"
                on:click={() => {
                  selectedTrack.set(p.track.slug);
                  trackEvent('engagement', `click`, `card.track.${p.track.name}`);
                }}>
                {p.track.name}
              </a>
            </div>
            <div>
              Start time:
              <time datetime={p.startTime.toISOString()}>
                {formatDateTime(p.startTime)}
              </time>
            </div>
          </li>
        {/each}
      </ul>

      <div>{work.desc || 'No description provided'}</div>
      {#if work.url}
        <div>
          <a href={work.url} target="_blank">More info</a>
        </div>
      {/if}
    </div>

    <div class="media">
      <!-- 
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            src="https://via.placeholder.com/96x96"
            alt={work.artist}
            loading="lazy" />
        </figure>
      </div>
     -->
      <div class="media-content">
        <p class="title is-5">{work.artist}</p>
        <SocialLink kind="instagram" value={work.instagram} />
        <SocialLink kind="twitter" value={work.twitter} />
        <SocialLink kind="facebook" value={work.facebook} />
        <SocialLink kind="website" value={work.website} />
      </div>
    </div>

  </div>
</div>
