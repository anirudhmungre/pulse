import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import { OAUTH_GOOGLE_CLIENT_ID, OAUTH_GOOGLE_CLIENT_SECRET } from "$env/static/private"

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Google({ clientId: OAUTH_GOOGLE_CLIENT_ID, clientSecret: OAUTH_GOOGLE_CLIENT_SECRET }),
  ],
  secret: "topsecret",
  trustHost: true
});
