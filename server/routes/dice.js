var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  //Logic goes here
  console.log("in the dice route", req.body.data)

  // var example = res.json()
  // console.log(example);


})

module.exports = router
