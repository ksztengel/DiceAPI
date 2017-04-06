var express = require('express');
var request = require('request');
var router = express.Router();
var result
router.post('/', function(req, res) {
  //Logic goes here
  console.log("in the dice route", req.body.data)

  let dice = req.body.data

  sides = parseInt(dice.sides)

  result = Math.floor(Math.random()*sides)+1

  console.log(result)

  res.json(result)

})

router.get('/', function(req,res){
console.log(result);
  return res.json(result)

})


module.exports = router
