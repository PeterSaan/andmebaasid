import { eq } from "drizzle-orm";
import { players, guardians, teams } from "./db/schema.js";
import { db } from "./dbDrizzle.js";

const deletable = process.argv.splice(2, 2).join("");
const del = await db.delete(players).where(eq(players.name, "petsmees"));

if(del) {
    for(let i = 1; i < (Object.keys(players).length); i++) {

    }
}


process.exit();