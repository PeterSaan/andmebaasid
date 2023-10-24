import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from "../dbDrizzle";

migrate(db, { migrationsFolder: 'db/migrations' }).then(
    process.exit,
    process.exit ? console.log("Migrated") : console.log("A problem occured")
);