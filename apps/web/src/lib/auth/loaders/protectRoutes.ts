import { redirect, type Handle } from "@sveltejs/kit";

export const protectRoutes: Handle = async ({ event, resolve }) => {
  // Protect any routes under /app
	if (event.url.pathname.startsWith('/app')) {
    const session = await event.locals.auth();
     if (!session) {
       throw redirect(303, '/login');
     }
   }

   return resolve(event);
}
