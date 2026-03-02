import { account } from "$lib";
import { redirect } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const ssr = false;

export const load: LayoutLoad = async ({ url }) => {
  let user;

  try {
    user = await account.get();
  } catch {}

  if (user) {
    const fallback = url.searchParams.get("redirectTo") || "/account";
    throw redirect(303, fallback);
  }

  return {};
};
