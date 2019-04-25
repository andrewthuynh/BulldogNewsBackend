const express = require("express");
const router = express.Router();

// Load User model
const Event = require("../../models/Event");
const Message = require("../../models/Message");
const Activity = require("../../models/Activity");

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

router.post("/new", (req, res) => {
    // Form validation

   

        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const newActivity = new Activity({
          id: req.body.activity.id,
          name: req.body.activity.name,
          details: req.body.activity.details,
          image: req.body.activity.image,
          description: req.body.activity.description,
          city: req.body.activity.city
        });

        const newEvent = new Event({
          owner: req.body.owner,
          startDate: today,
          endDate: tomorrow,
          activity: newActivity
        });

        newEvent
          .save()
          .then(event => res.json(event))
          .catch(err => console.log(err));

  });

router.post("/chat", (req, res) => {
  // Form validation

  var time = new Date();

  const newMessage = new Message({
    eventId: req.body.eventId,
    sender: req.body.sender,
    message_date: time,
    content: req.body.content
  });

  newMessage
    .save()
    .then(message => res.json(message))
    .catch(err => console.log(err));

});

module.exports = router;
