import { eq } from "drizzle-orm";
import { players, guardians, teams } from "./db/schema.js";
import { db } from "./dbDrizzle.js";

const deletable = process.argv.splice(2, 2).join("");
const del = await db.delete(players).where(eq(players.name, "petsmees"));

if(del) {
    console.log("The player was deleted successfully");
} else {
    console.log("Something went wrong");
}


process.exit();