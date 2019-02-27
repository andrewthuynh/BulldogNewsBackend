const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = process.env.PORT || 5000;
const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb+srv://soarAdmin:!Monkey000@cluster0-kmm0h.mongodb.net/test?retryWrites=true";

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
