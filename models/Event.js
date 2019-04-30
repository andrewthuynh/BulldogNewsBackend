const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Message = require('./Message').schema;
// Create Schema
const EventSchema = new Schema({
  name: {
    type: String,
    required: false,
    default: "My New Event"
  },
  image: {
    type: String,
    required: false,
    default: "https://www.switchbacktravel.com/sites/default/files/Colorado%20Outdoors%20%28m%29.jpg"
  },
  city: {
    type: String,
    required: false,
    default: "Austin, Texas"
  },
  details: {
    type: String,
    required: false,
    default: "details"
  },
  owner: {
    type: String,
    required: false
  },
  members: {
    type: Array,
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
  discussion: [Message],  
});

module.exports = Event = mongoose.model("events", EventSchema);