var express = require('express');
var router = express.Router();
var db = require('../models/');

// show all the burger data in the database 
router.get("/", function (req, res) {
    res.redirect("/burgers");
});


// get all the burger in the database and render the index.handlebars page 
router.get("/burgers", function (req, res) {
    db.Burger.findAll().then(function(dbBurger){
        var hbsObject = { burger: dbBurger };
        return res.render("index", hbsObject);
    });
});

// post route 
router.post("/burgers/create", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function (dbBurger) {
        console.log(dbBurger);
        res.redirect("/");
    })
});


// put route -> back to index
router.put("/burgers/update", function (req, res) {
    db.Burger.update(
        {
            devoured: true
        },
        {
            where: {
                id: req.body.burger_id
            }
        }
    ).then(function (dbBurger) {
        console.log(dbBurger);
        res.redirect("/");
    });
});




module.exports = router;