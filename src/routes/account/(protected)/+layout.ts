import { account } from "$lib";
import { redirect } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const ssr = false;

export const load: LayoutLoad = async ({ url }) => {
  let user;

  try {
    user = await account.get();
  } catch {}

  if (!user) {
    const loginUrl = `/account/login?redirectTo=${encodeURIComponent(url.pathname + url.search)}`;
    redirect(303, loginUrl);
  }

  return { user };
};
