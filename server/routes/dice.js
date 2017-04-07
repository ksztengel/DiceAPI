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


    function NdX(N, X) {
        let diceRoll = 0
        let sum = 0
        for (var i = 0; i < N; i++) {
            diceRoll = Math.floor(Math.random() * X) + 1
            sum += diceRoll
            console.log("diceRoll", diceRoll);
        }
        return sum
    }
    let result2 = NdX(N, X)

    function NdXdD(N, X, D) {

        let drop = [];
        let diceRoll = 0
        for (var i = 0; i < N; i++) {
            diceRoll = Math.floor(Math.random() * X) + 1
            drop.push(diceRoll)
            drop.sort(function(a, b) {
                return a - b;
            })

            console.log(drop);

        }
        return drop.slice(D).reduce(function(acc, val) {
            return acc + val;
        }, 0)
    }

    let result3 = NdXdD(N, X, D)

    function NdXdK(N, X, K) {

        let drop = [];
        let diceRoll = 0
        for (var i = 0; i < N; i++) {
            diceRoll = Math.floor(Math.random() * X) + 1
            drop.push(diceRoll)
            drop.sort(function(a, b) {
                return a - b;
            })

            console.log(drop);

        }
        return drop.slice(N-K).reduce(function(acc, val) {
            return acc + val;
        }, 0)
    }

    let result4 = NdXdK(N, X, K)

    // var NdXdE = N*(Math.floor(Math.random()*X)+1)

    res.json({
        result: dX,
        result2: result2,
        result3: result3,
        result4: result4
    })

})

module.exports = router
