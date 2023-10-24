/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./db/schema.js",
    out: "./db/migrations",
    driver: 'mysql2',
    dbCredentials: {
        host: "localhost",
        user: "root",
        password: "Passw0rd",
        database: "andmebaasid",
    }
  };