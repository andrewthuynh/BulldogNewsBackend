const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ArticleSchema = new Schema({
  author: {
    type: String,
    default: "John Doe"
  },
  title: {
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
  body: {
    type: String,
    required: false
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Article = mongoose.model("articles", ArticleSchema);