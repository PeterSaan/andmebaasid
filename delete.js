import { eq } from "drizzle-orm";
import { players, guardians, teams } from "./db/schema.js";
import { db } from "./dbDrizzle.js";

let nrOfNames = (process.argv).length - 2
const deletable = process.argv.splice(2, nrOfNames);
await db.delete(players).where(eq(players.name, deletable));

process.exit();