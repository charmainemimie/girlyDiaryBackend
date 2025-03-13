const express = require("express");
const Note = require("../models/DiaryEntry.js");
const router = express.Router();

// Get all notes
router.get("/", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

// Create a note
router.post("/", async (req, res) => {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.json(newNote);
});

// Update a note
router.put("/:id", async (req, res) => {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.json(updatedNote);
});

// Delete a note
router.delete("/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
});

module.exports = router;
