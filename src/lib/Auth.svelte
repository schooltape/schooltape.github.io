<script lang="ts">
  import { account } from "$lib";
  import { ID } from "appwrite";
  import TextInput from "$lib/TextInput.svelte";
  import { invalidateAll } from "$app/navigation";

  let email = $state("");
  let password = $state("");

  let {
    mode,
  }: {
    mode: "signup" | "login";
  } = $props();
</script>

<div class="grid h-screen place-items-center">
  <div class="w-md">
    <div class="text-ctp-text my-4 flex w-full flex-col gap-3">
      <h2 class="text-center text-2xl font-semibold">
        {mode === "signup" ? "Register" : "Login"}
      </h2>

      <div>
        <span class="text-sm">Email</span>
        <TextInput id="email" bind:value={email} placeholder="Email" type="email" />
      </div>

      <div>
        <span class="flex w-full justify-between text-sm">
          Password

          {#if mode === "login"}
            <button
              class="text-ctp-sapphire underline"
              onclick={() => {
                //TODO
              }}>Forgot Password?</button>
          {/if}
        </span>
        <TextInput id="password" bind:value={password} placeholder="Password" type="password" />
      </div>
    </div>

    <button
      class="text-ctp-base text-md bg-ctp-sapphire hover:bg-ctp-sapphire/80 active:bg-ctp-sapphire/60 mt-4 w-full rounded-xl py-2"
      onclick={async () => {
        if (mode === "signup") {
          await account.create({
            userId: ID.unique(),
            email,
            password,
          });
        }

        await account.createEmailPasswordSession({
          email,
          password,
        });

        const user = await account.get();

        if (!user.emailVerification) {
          await account.createEmailVerification({
            url: `https://schooltape.github.io/account/verify`,
          });
        }

        await invalidateAll();
      }}>
      {mode === "signup" ? "Create Account" : "Login"}
    </button>

    <div class="mt-4 flex flex-col items-center gap-1">
      <p class="text-ctp-subtext0">
        {#if mode === "signup"}
          Already have an account? <a class="text-ctp-sapphire" href="/account/login">Log in</a>
        {:else}
          Don't have an account? <a class="text-ctp-sapphire" href="/account/signup">Sign up</a>
        {/if}
      </p>

      {#if mode === "signup"}
        <p class="text-ctp-subtext0 text-xs">
          By signing up, you agree to our <a
            class="text-ctp-sapphire hover:underline"
            target="_blank"
            href="https://github.com/schooltape/.github/blob/main/PRIVACY_POLICY.md">Privacy Policy</a>
        </p>
      {/if}
    </div>
  </div>
</div>
