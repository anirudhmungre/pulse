import { DB_URI } from '$env/static/private';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { dev } from '$app/environment';

const client = dev ? postgres(DB_URI) : postgres(DB_URI, { ssl: 'require' });
export const db = drizzle(client, {});
