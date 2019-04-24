const express = require("express");
const router = express.Router();


const Activity = require("../../models/Activity");

router.get("/", (req, res) => {
  
  Activity.find({ city: { $regex: req.query.city, $options: 'i'} }, function(err, activities){
  if (err) return handleError(err);

  res.send(activities);
  });
  
});

router.post("/new", (req, res) => {
  // Form validation

  Activity.findOne({ id: req.body.id }).then(activity => {
    if (activity) {
      return res.status(400).json({ activity: "Activity already exists" });
    } else {

      const newActivity = new Activity({
        id: req.body.id,
        name: req.body.name,
        details: req.body.details,
        image: req.body.image,
        description: req.body.description,
        city: req.body.city
      });

      newActivity
            .save()
            .then(activity => res.json(activity))
            .catch(err => console.log(err));
    }

  });
});

module.exports = router;
