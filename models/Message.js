const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MessageSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  message_date: { 
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = Message = mongoose.model("messages", MessageSchema);