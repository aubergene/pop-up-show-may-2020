<script>
  import { trackEvent } from "./helpers";
</script>

<div class="content">
  <p>
    Work in Progress show for Goldsmiths University Computational Arts MA/MFA
    and Independent Games and Playable Experience Design MA.
  </p>

  <p>
    For the very first time all performances, artwork, and games will be
    showcased entirely online via
    <a
      href="https://zoom.us/"
      target="_blank"
      on:click={() => trackEvent('social', 'click', 'intro.zoom')}>
      Zoom
    </a>
    .
  </p>

  <p>
    You can RSVP to our
    <a
      href="https://www.facebook.com/events/1942782225857241/"
      target="_blank"
      on:click={() => trackEvent('social', 'click', 'intro.facebook')}>
      Facebook event
    </a>
    , follow us on
    <a
      href="https://www.instagram.com/goldsmithscomparts/"
      target="_blank"
      on:click={() => trackEvent('social', 'click', 'intro.instagram')}>
      Instagram @goldsmithscomparts
    </a>
    and
    <a
      href="https://twitter.com/goldcomparts/"
      target="_blank"
      on:click={() => trackEvent('social', 'click', 'intro.twitter')}>
      Twitter @goldcomparts
    </a>
    .
  </p>
</div>
