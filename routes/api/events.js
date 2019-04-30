const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

// Load User model
const Event = require("../../models/Event");
const Message = require("../../models/Message");

// @route POST api/users/register
// @desc Register user
// @access Public
router.get("/searchEvent", (req, res) => {

  Event.find({ name: { $regex: req.query.name, $options: 'i' } }, function (err, events) {
    if (err) return handleError(err);

    res.send(events);
  });

});

router.get("/myEvents", (req, res) => {

  Event.find({ owner: { $regex: req.query.owner, $options: 'i' } }, function (err, events) {
    if (err) return handleError(err);

    res.send(events);
  });

});

router.get("/getEvent", (req, res) => {

  Event.findById(req.query.id).then(event => {
    res.send(event);
  })
});

router.delete("/deleteEvent", (req, res) => {

  Event.deleteOne({ _id: req.body.id }, function (err) {
    if (err) {
      console.log(err);
    }

    res.send("Deleted event with ID ".concat(req.body.id));
  });
});

router.get("/getEvents", (req, res) => {

  var list;
  var ids;

  User.findOne({ username: req.query.username }).then(user => {
    list = user.events;
    ids = list.map(function (id) { return mongoose.Types.ObjectId(id); });
    Event.find({ _id: { $in: ids } }).then(event => {
      res.send(event);
    })
  })

});

router.post("/new", (req, res) => {
  // Form validation



  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const newEvent = new Event({
    name: req.body.name,
    image: req.body.image,
    city: req.body.city,
    details: req.body.details,
    owner: req.body.owner,
    startDate: today,
    endDate: tomorrow,
  });

  newEvent
    .save()
    .then(event => res.json(event))
    .catch(err => console.log(err));

});

router.post("/updateDate", (req, res) => {
  Event.findOneAndUpdate({ '_id': req.body.id }, { $set: { startDate: req.body.startDate, endDate: req.body.endDate } }, function (err, doc) {

    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
  });
})

router.post("/chat", (req, res) => {
  // Form validation

  var time = new Date();

  Event.findById(req.body.id).then(event => {

    event.discussion.push(
      {
        sender: req.body.sender,
        message_date: time,
        content: req.body.content
      }
    );

    event
      .save()
      .then(newMessage => res.json(newMessage))
      .catch(err => console.log(err));
  })

});

module.exports = router;
