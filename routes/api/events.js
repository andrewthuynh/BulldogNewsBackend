const express = require("express");
const router = express.Router();

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

router.post("/new", (req, res) => {
  // Form validation

  Event.findOne({ id: req.body.id }).then(event => {
    if (event) {
      return res.status(400).json({ email: "Event already exists" });
    } else {

      var today = new Date();
      var tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);

      const newEvent = new Event({
        activityId: req.body.activityId,
        name: req.body.name,
        details: req.body.details,
        startDate: today,
        endDate: tomorrow
      });

      newEvent
        .save()
        .then(event => res.json(event))
        .catch(err => console.log(err));
    }

  });
});

router.post("/chat", (req, res) => {
  // Form validation

  var time = new Date();

  const newMessage = new Message({
    sender: req.body.sender,
    message_date: time,
    content: req.body.content
  });

  newMessage
    .save()
    .then(message => res.json(message))
    .catch(err => console.log(err));

  Event.findOne({ _id: req.body.id }).then(event => {

    event.discussion.push(newMessage);

    newEvent
      .save()
      .then(event => res.json(event))
      .catch(err => console.log(err));

  });

});

module.exports = router;
