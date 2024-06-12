const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const dbPath = path.join(__dirname, "../db/db.json");

// GET /api/notes - Retrieve all notes
router.get("/notes", (req, res) => {
  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to read notes" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// POST /api/notes - Save a new note
router.post("/notes", (req, res) => {
  const newNote = { ...req.body, id: uuidv4() };

  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to read notes" });
    } else {
      const notes = JSON.parse(data);
      notes.push(newNote);
      fs.writeFile(dbPath, JSON.stringify(notes, null, 2), (err) => {
        if (err) {
          res.status(500).json({ error: "Failed to save note" });
        } else {
          res.json(newNote);
        }
      });
    }
  });
});

// DELETE /api/notes/:id - Delete a note by id
router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;

  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to read notes" });
    } else {
      let notes = JSON.parse(data);
      notes = notes.filter((note) => note.id !== noteId);
      fs.writeFile(dbPath, JSON.stringify(notes, null, 2), (err) => {
        if (err) {
          res.status(500).json({ error: "Failed to delete note" });
        } else {
          res.json({ id: noteId });
        }
      });
    }
  });
});

module.exports = router;
