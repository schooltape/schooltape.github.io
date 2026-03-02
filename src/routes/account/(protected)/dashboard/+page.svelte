<script lang="ts">
  import { page } from "$app/state";
  import { logout } from "$lib/auth";

  $inspect(page.data);
</script>

<h1>Dashboard under construction!</h1>

<button onclick={() => logout()} class="bg-ctp-red text-ctp-base rounded-md px-2 py-1">Logout</button>
