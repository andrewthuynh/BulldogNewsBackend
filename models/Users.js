// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
  {
    firstName:{
      type: String,
      required: True
    },
    lastName:{
      type: String,
      required: True
    },
  email:{
    type: String,
    required: True
  },
  password:{
    type: String,
    required: True
  },
  date: {
    type: Date,
    default: Date.now
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);
