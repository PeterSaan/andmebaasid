import { players, guardians, teams } from "./db/schema.js";
import { db } from "./dbDrizzle.js";

const result = await db.select().from(players);

for(let i = 0; i < result.length; i++) {
    console.log("Hello, my name is " + result[i].name + " and my id is " + result[i].id);
}
process.exit();