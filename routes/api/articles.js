const express = require("express");
const router = express.Router();

// Load User model
const Article = require("../../models/Article");

// @route POST api/users/register
// @desc Register user
// @access Public
router.get("/searchTags", (req, res) => {
  
  Article.find({ tags: {$in: req.query.tag} }, function(err, articles){
    if (err) return handleError(err);
  
    res.send(articles);
    });
  
});

router.get("/searchTitle", (req, res) => {
    
  Article.find({ title: { $regex: req.query.title, $options: 'i'}}, function(err, articles){
  
    res.send(articles);
    });

});


router.post("/new", (req, res) => {
  // Form validation

  Article.findOne({ title: req.body.title }).then(article => {
    if (article) {
      return res.status(400).json({ article:  "Article title already exists" });
    } else {

      const newArticle = new Article({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        details: req.body.details,
        image: req.body.image,
        body: req.body.body
      });

      newArticle
            .save()
            .then(article => res.json(article))
            .catch(err => console.log(err));
    }

  });
});

module.exports = router;
