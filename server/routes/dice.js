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

    var dX = Math.floor(Math.random() * X) + 1


     function NdX (N,X){
     let diceRoll = 0
     let sum = 0
     for (var i=0; i<N; i++) {

      diceRoll = Math.floor(Math.random()*X)+1
      sum  += diceRoll
      console.log("diceRoll", diceRoll);
      }
      return sum
    }

    let result2 = NdX(N,X)
    //var NdXdD = N*(Math.floor(Math.random()*X)+1)-D
    // console.log(NdXdD);
    //
    // var NdXdK = N*(Math.floor(Math.random()*X)+1)
    // console.log(NdXdK);
    //
    // var NdXdE = N*(Math.floor(Math.random()*X)+1)

    res.json({ result: dX, result2: result2 })

})

module.exports = router
