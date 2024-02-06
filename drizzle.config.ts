import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

const { DB_URI } = process.env;

if (!DB_URI) {
 throw new Error('No url');
}

export default {
 schema: './src/lib/db/schema/*',
 out: './src/lib/server/db/migrations',
 driver: 'pg',
 dbCredentials: {
  connectionString: DB_URI
 }
} satisfies Config;
