import { db } from '$lib/server/db';
import { user } from '$lib/db/schema/user';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const result = await db.select().from(user)
    return {
        result
    };
}) satisfies PageServerLoad;
