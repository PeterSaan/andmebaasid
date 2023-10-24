import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2";

export const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "Passw0rd",
    database: "andmebaasid",
});

export const db = drizzle(connection);