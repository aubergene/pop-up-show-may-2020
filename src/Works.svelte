<script>
  import { ascending } from "d3-array";

  export let projects;
  export let tracks;

  const projectsSorted = projects
    .slice()
    .sort((a, b) => ascending(a.slug, b.slug));
</script>

<style>
  .projects {
    margin-top: 4em;
  }

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

<div class="projects">
  <h2 class="title is-2">Works</h2>
  <p class="subtitle is-7">In alphabetical order by title</p>

  {#each projectsSorted as project, i}
    <div class="card">
      <a class="anchor-link" name={project.slug} />
      <div class="card-image">
        <figure class="image is-2by1">
          <img
            src="https://lorempixel.com/1000/500/abstract/{i % 10}/"
            alt={project.title} />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="title is-4">{project.title}</p>
          <a href="#schedule">
            {#if tracks[project.track]}
              <div>
                Track:
                <span class="track {tracks[project.track].name}-bg">
                  {tracks[project.track].name}
                </span>
              </div>
            {/if}
            <div>
              Start time:
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </a>
          <div>{project.desc || 'No description provided'}</div>
          <div>
            <a href="#">#keywords</a>
            <a href="#">#themes</a>
          </div>
        </div>

        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://lorempixel.com/96/96/cats/{i % 10}"
                alt={project.artist} />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-5">{project.artist}</p>
            <p class="subtitle is-6">
              <span class="social-profile">
                IG:
                <a href="https://instagram.com/johnsmith">@johnsmith</a>
              </span>
              <span class="social-profile">
                TW:
                <a href="https://twitter.com/johnsmith">@johnsmith</a>
              </span>
              <span class="social-profile">
                www:
                <a href="https://www.johnsmith.com">www.johnsmith.com</a>
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- 
	  
    <article class="panel is-primary">
      <p class="panel-heading">{artist[0]}</p>

      {#each artist[1] as project}
        <a class="panel-block">
          <b>{project.title}</b>
          <br />
          {project.desc || 'No description provided'}
        </a>
      {/each}
    </article>
   -->
  {/each}
</div>
