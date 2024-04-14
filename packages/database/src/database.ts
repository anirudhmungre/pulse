import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';
import * as schema from './schema';

dotenv.config({ path: '../../configs/.env' });

const connectionString = process.env.DATABASE_URI || '';
const client = postgres(connectionString);

export const db = drizzle(client, { schema });
