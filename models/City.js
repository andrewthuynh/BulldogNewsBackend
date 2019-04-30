const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: []
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
});

module.exports = City = mongoose.model("cities", CitySchema);