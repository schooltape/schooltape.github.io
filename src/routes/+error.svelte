<script>
  import { onMount } from "svelte";

  let link = $state();
  onMount(() => {
    const path = window.location.pathname;
    if (path.startsWith("/wiki")) return;

    link = "/wiki" + path + window.location.search;
    window.location.replace(link);
  });
</script>

<div class="grid h-screen place-items-center">
  <span>
    Redirecting to the
    <a class="text-ctp-sapphire hover:underline" href={link}>wiki</a>...
  </span>
</div>
