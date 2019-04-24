const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ActivitySchema = new Schema({
  city: {
    type: String,
    required: true
  },
  id: {
      type: Number,
      required: true,
      unique: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
  },
  description: {
    type: String,
    required: false
  },
  details: {
    type: String,
    required: false
  }
});

module.exports = Activity = mongoose.model("activities", ActivitySchema);