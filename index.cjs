const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const connection = mysql.createConnection({
  host: "localhost",
    user: "root",
    password: "Passw0rd",
    database: "andmebaasid",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*db.connect(err => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  };
  console.log("Connected to MySQL");
});*/

app.post('/insertData', (req, res) => {
  const { id , name } = req.body;
  const query = 'INSERT INTO players (id, name) VALUES (?, ?)';

  connection.query(query, [id, name], (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      res.status(500).send("Error inserting data into MySQL");
    } else {
      res.status(200).send("Player added to the database sucessfully");
    }
  });
});

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server running on http://localhost:${port}`);
});