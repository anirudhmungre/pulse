import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../../configs/.env'});

export default {
 schema: './src/schema/*.ts',
 out: './migrations',
 driver: 'pg',
 dbCredentials: {
  connectionString: process.env.DATABASE_URI || ''
 }
} satisfies Config;
