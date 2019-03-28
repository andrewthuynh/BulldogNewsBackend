const express = require("express");
const router = express.Router();

// Load User model
const Event = require("../../models/Event");

// @route POST api/users/register
// @desc Register user
// @access Public
router.get("/", (req, res) => {
  
  Event.find({ name: { $regex: req.query.name, $options: 'i'} }, function(err, events){
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
	tomorrow.setDate(today.getDate()+1);

      const newEvent = new Event({
        id: req.body.id,
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

module.exports = router;
