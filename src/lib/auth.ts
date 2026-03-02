import { account } from "$lib";
import { invalidateAll } from "$app/navigation";

export async function logout() {
  try {
    await account.deleteSession({ sessionId: "current" });

    await invalidateAll();
  } catch (error) {
    console.error("logout failed:", error);
  }
}
