import { SvelteKitAuth } from "@auth/sveltekit"
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "database";
import Google from "@auth/sveltekit/providers/google"
import { OAUTH_GOOGLE_CLIENT_ID, OAUTH_GOOGLE_CLIENT_SECRET, AUTH_SECRET } from "$env/static/private"

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google({
      clientId: OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: OAUTH_GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
  ],
  secret: AUTH_SECRET,
  trustHost: true
});
