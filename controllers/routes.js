// var express = require("express");
// var router = express.Router();
// var burger = require("../models/burger.js");

// router.get("/", function (req, res) {
//     burger.selectAll(function (resp) {
//         res.render("index", { burgers: resp });
//     });
// });

// router.post("/api/burgers", function (req, res) {
//     burger.createOne(["burger_name", "devoured"], 
//     [req.body.burger_name, req.body.devoured], 
//     function (result) {
//         res.json({ id: result.insertId });
//     });
// });

// router.put("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);

//     burger.updateOne({
//         devoured: req.body.devoured
//     },
//         condition,
//         function (result) {
//             if (result.changedRows === 0) {
//                 // If no rows were changed, then the ID must not exist, so 404
//                 return res.status(404).end();
//             }
//             res.status(200).end();

//         }
//     );
// });

// module.exports = router;


var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

  router.post("/api/burgers", function(req, res) {
    burger.insertOne(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function(result) {
        // Send back the ID of new burger
        res.json({ id: result.insertId });
      }
    );
  });
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.update({ devoured: req.body.devoured }, condition, function(
      result
    ) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});
module.exports = router;