import { int, mysqlEnum, mysqlTable, bigint, uniqueIndex, varchar, primaryKey } from 'drizzle-orm/mysql-core';


export const players = mysqlTable('players', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 256 }),
}, (table) => ({
  nameIndex: uniqueIndex('name_idx').on(table.name),
}));
 
export const guardians = mysqlTable('guardians', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256}),
  phone: varchar('phone', { length: 256 }),
  popularity: mysqlEnum('popularity', ['unknown', 'known', 'popular']),
});

export const playersGuardians = mysqlTable('players_guardians', {
    guardians_id: bigint('guardians_id', { mode: 'number'}).references(() => guardians.id),
    players_id: bigint('players_id', { mode: 'number'}).references(() => players.id),
}, (table) => ({
    pk: primaryKey(table.guardians_id, table.players_id),
}));

export const teams = mysqlTable('teams', {
    id: bigint('id', { mode: 'number'}).primaryKey().autoincrement(),
    name: varchar('name', { length: 256}),
})