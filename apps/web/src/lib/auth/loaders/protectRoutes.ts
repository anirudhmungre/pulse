import { redirect, type Handle } from "@sveltejs/kit";

const UNAUTHENTICATED_ROUTES = ['/login', '/signup'];

export const protectRoutes: Handle = async ({ event, resolve }) => {
	if (!UNAUTHENTICATED_ROUTES.includes(event.url.pathname)) {
    const session = await event.locals.auth();
     if (!session) {
       throw redirect(303, '/login');
     }
   }

   return resolve(event);
}
