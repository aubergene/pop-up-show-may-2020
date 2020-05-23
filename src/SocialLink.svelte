<script>
  export let kind;
  export let value;

  let icon;
  let url;
  let text;

  switch (kind) {
    case "website":
      icon = "";
      url = value;
      text = value;
      break;
    case "instagram":
      icon = `<span class="icon"><i class="fab fa-instagram"></i></span>`;
      url = `https://instagram.com/${value}`;
      text = `@${value}`;
      break;
    case "twitter":
      icon = `<span class="icon"><i class="fab fa-twitter"></i></span>`;
      url = `https://twitter.com/${value}`;
      text = `@${value}`;
      break;

    default:
      throw new Error(`Unknown social kind ${kind}`);
      break;
  }
</script>

{#if value}
  <div class="social-profile">
    {@html icon}
    <a href={url} target="_blank">{value}</a>
  </div>
{/if}
