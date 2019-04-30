const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'friends'
  }],
  events: {
    type: Array,
  },
  image: {
    type: String,
    default: 'https://www.palmkvistmaleri.se/wp-content/uploads/2018/02/default.jpg'
  }
});

module.exports = User = mongoose.model("users", UserSchema);