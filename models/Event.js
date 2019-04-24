const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Message = require('./Message');
// Create Schema
const EventSchema = new Schema({
  activityId: {
    type: Number,
    required: true
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
  }]
});

module.exports = Event = mongoose.model("events", EventSchema);