import { players, guardians, teams } from "./db/schema.js";
import { db } from "./dbDrizzle.js";

const insertName = process.argv.splice(2, 2).join(" ");

await db.insert(players).values({ name: insertName });
process.exit();