<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { account } from "$lib";
  import { onMount } from "svelte";

  let promise = $state();

  onMount(() => {
    if (page.data.user?.emailVerification) {
      goto("/account");
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const secret = urlParams.get("secret");

    if (userId && secret) {
      promise = account.updateEmailVerification({
        userId,
        secret,
      });
    }
  });
</script>

{#if !promise}
  Invalid user ID or secret, please verify again.
{/if}
{#await promise}
  Loading...
{:then response}
  {response}
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
