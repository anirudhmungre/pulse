import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db } from './src';

migrate(db, { migrationsFolder: 'migrations' })
  .then(() => {
    console.log('Migrations finished!');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
