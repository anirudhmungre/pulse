import { signOut } from "$lib/auth";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const actions: Actions = { default: signOut };

export const load: PageServerLoad = async (event) => {
  const session = await event.locals.auth();
  if (!session?.user) throw redirect(303, '/login');
  return {};
}
