const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  members: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: false
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  },
  details: {
      type: String,
      required: false
  }
});

module.exports = Event = mongoose.model("events", EventSchema);