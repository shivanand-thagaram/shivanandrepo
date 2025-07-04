import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';


const pool = new Pool({
  connectionString: 'postgres://postgres:Nandu321!@localhost:5432/mydb',
});

export const db = drizzle(pool, { schema });
