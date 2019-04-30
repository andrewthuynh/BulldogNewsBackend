const express = require("express");
const router = express.Router();

// Load User model
const City = require("../../models/City");

// @route POST api/users/register
// @desc Register user
// @access Public
router.get("/", (req, res) => {
  
  City.find({ tags: {$in: req.query.tag} }, function(err, cities){
    if (err) return handleError(err);
  
    res.send(cities);
    });
  
});

router.post("/new", (req, res) => {
  // Form validation

  City.findOne({ name: req.body.name }).then(city => {
    if (city) {
      return res.status(400).json({ city: "City already exists" });
    } else {

      const newCity = new City({
        name: req.body.name,
        description: req.body.description,
        details: req.body.details,
        image: req.body.image
      });

      newCity
            .save()
            .then(city => res.json(city))
            .catch(err => console.log(err));
    }

  });
});

module.exports = router;
