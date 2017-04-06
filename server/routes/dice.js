var express = require('express');
var request = require('request');
var router = express.Router();
var result
router.post('/', function(req, res) {
  //Logic goes here
  console.log("in the dice route", req.body.data)

  let dice = req.body.data

  N = parseInt(dice.dice)
  X = parseInt(dice.sides)
  D = parseInt(dice.drop)
  K = parseInt(dice.keep)
  E = parseInt(dice.explosive)
  L = parseInt(dice.literal)

  result = Math.floor(Math.random()*X)+1

  console.log(result)

  res.json(result)

})

router.get('/', function(req,res){
  console.log(result);
 res.json(result)

})


module.exports = router
