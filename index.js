import express, { urlencoded, json } from 'express';
import { db } from './dbDrizzle.js';
import { connection } from './dbDrizzle.js';
import { players, guardians, teams } from "./db/schema.js";
import { eq } from 'drizzle-orm';
const app = express();
const port = 3000;

app.use(urlencoded({ extended: false }));
app.use(json());
app.set('view engine', 'ejs');

connection.connect(err => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  };
  console.log("Connected to MySQL");
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/insertData', async (req, res) => {
  const { name } = req.body;

  await db.insert(players).values({ name: name });
  res.send(`Tehtud <br><br> <button onclick=window.location.href='http://localhost:3000'>Tagasi</button>`);
});

app.get('/viewData', async (req, res) => {
  const result = await db.select().from(players);
  res.render('viewData', { players: result });
});

app.get('/changeData', async (req, res) => {
  const { delName } = req.body;
  const result = await db.select().from(players);

  await db.delete(players).where(eq(players.name, delName));
  res.render('changeData', { players: result});
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server running on http://localhost:${port}`);
});