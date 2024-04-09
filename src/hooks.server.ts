import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

import { configOauthProviders, protectRoutes } from "$lib/auth";

export const handle: Handle = sequence(
  configOauthProviders,
  protectRoutes,
);
