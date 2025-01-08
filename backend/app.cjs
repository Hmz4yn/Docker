const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
var cors = require('cors')
const port = 3001;

// Connect to SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    } else {
      console.log('Connected to SQLite database.');
    }
  });

// Middleware
app.use(express.json());
app.use(cors());
// Initialize database
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, text TEXT)");
});

// API routes
app.get("/messages", (req, res) => {
    db.all("SELECT * FROM messages", [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

app.post("/messages", (req, res) => {
    const { text } = req.body;
    db.run("INSERT INTO messages (text) VALUES (?)", [text], function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).json({ id: this.lastID, text });
        }
    });
});

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}/messages`);
});
