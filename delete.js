import { eq } from "drizzle-orm";
import { players, guardians, teams } from "./db/schema.js";
import { db } from "./dbDrizzle.js";

const deletable = process.argv.splice(2, 2).join("");
const del = await db.delete(players).where(eq(players.name, deletable));

del ? console.log("Deleted") : console.log("There was a problem");
process.exit();