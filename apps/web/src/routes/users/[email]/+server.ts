import searchUsersByEmail from "$lib/server/auth/searchUsersByEmail";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params: { email } }) => {

  const users = await searchUsersByEmail(email);

  if (users.length === 0) {
    return error(404, 'No users found.');
  }

  return new Response(JSON.stringify(users), {
    headers: {
      'content-type': 'application/json'
    }
  });
}
