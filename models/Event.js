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
    type: Array,
    required: false
  },
  owner: {
    type: String,
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