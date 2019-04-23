const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  details: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  events: {
    type: Array,
    required: false
  }
});

module.exports = City = mongoose.model("cities", CitySchema);