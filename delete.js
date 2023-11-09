import { players, guardians, teams } from "./db/schema.js";
import { db } from "./dbDrizzle.js";

const del = await db.delete(players).where(eq(players.name, "Markus Halliksoo"));
del ? console.log("Deleted") : console.log("There was a problem");
process.exit();