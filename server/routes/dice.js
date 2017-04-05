var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  //Logic goes here
  console.log("in the dice route", req.body.data)
  let dice = req.body.data

  sides = parseInt(dice.sides)

  var example = Math.floor(Math.random()*sides)+1

  res.json(example)


})

module.exports = router
