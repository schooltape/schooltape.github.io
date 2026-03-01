<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { dev } from "$app/environment";

  let redirect = `/wiki/${$page.params.path}`;

  onMount(() => {
    if (dev) return;
    window.location.replace(redirect);
  });
</script>

<div class="flex min-h-screen items-center justify-center">
  <p>Redirecting to the <a href={redirect} class="text-ctp-sapphire hover:underline">Wiki</a>...</p>
</div>
