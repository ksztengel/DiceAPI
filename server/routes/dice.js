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

    function NdX(N, X) {
        let diceRoll = 0
        let diceArray = []
        for (var i = 0; i < N; i++) {
            diceRoll = Math.floor(Math.random() * X) + 1
            diceArray.push(diceRoll)
        }
        return diceArray
    }

    let result = NdX(N, X)

    let result1 = result[0]

    let result2 = result.reduce(function(acc, val) {
        return acc + val;
    }, 0)

    let sorted = result.sort(function(a, b) {
        return a - b;
    })

    let result3 = sorted.slice(D).reduce(function(acc, val) {
        return acc + val;
    }, 0)

    let result4 = sorted.slice(N - K).reduce(function(acc, val) {
        return acc + val;
    }, 0)

    function NdXxE(N, X, E, result) {
        console.log(result);
        let explode1 = result.reduce(function(acc, val) {
                return acc + val;
            }, 0)
            console.log("explode1", explode1);

        var rollAgain = []
        for (var i = 0; i < result.length +1; i++) {
            if (E <= result[i]) {
                rollAgain.push(result.pop(result[i]))
                console.log("rollAgain", rollAgain);

                var diceRoll = 0
                var diceArray = []
                for (var i = 0; i < rollAgain.length+1; i++) {

                    diceRoll = Math.floor(Math.random() * X) + 1
                    diceArray.push(diceRoll)
                    console.log("diceArray", diceArray);
                    let explode2 = diceArray.reduce(function(acc, val) {
                            return acc + val;
                        }, 0)
                        console.log("explode2", explode2);
                        return explode1 + explode2
                }

            }

        }

    }





    let result5 = NdXxE(N, X, E, result)
    console.log("result5", result5);


    res.json({
        result1: result1,
        result2: result2,
        result3: result3,
        result4: result4,
        result5: result5
    })
})




// if (E < len[i]){
//   rollAgain2 = result.shift(result[i])
// let len2 = rollAgain2 - result.length
//
// let explode1 = return result.reduce(function(acc, val) {
//         return acc + val;
//     }, 0)
//     console.log("explode", exlode1);
//
//   console.log("len", len);
//   console.log("rollAgain", rollAgain);
//   }
module.exports = router
