const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Message = require('./Message');
// Create Schema
const EventSchema = new Schema({
  name: {
    type: String,
    required: false,
    default: "My New Event"
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
  discussion: [{
      type: Schema.Types.ObjectId, 
      ref:'Message',
      required: false
  }],
  activity: [{
    type: Schema.Types.ObjectId, 
    ref:'Activity',
    required: true
}]
  
});

module.exports = Event = mongoose.model("events", EventSchema);