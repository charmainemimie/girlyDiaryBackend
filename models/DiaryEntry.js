const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  title: String,
  content: String,
  mood: { type: String, enum: ["Happy", "Sad", "Excited", "Angry", "Love"] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DiaryEntry", diarySchema);
