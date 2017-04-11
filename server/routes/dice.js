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
            console.log(result);

            let result1 = result[0]
            console.log("result1", result1);


            let result2 = result.reduce(function(acc, val) {
                return acc + val;
            }, 0)

            let sorted = result.sort(function(a, b) {
              return a - b;
            })
            // console.log("sorted", sorted);
            let result3 = sorted.slice(D).reduce(function(acc, val) {
                return acc + val;
            }, 0)

            let result4 = sorted.slice(N-K).reduce(function(acc, val) {
                return acc + val;
            }, 0)

            function NdXxE (N,X,E, result){
              for (var i = 0; i < result.length; i++) {
                if (E < result[i]){
                return result.reduce(function(acc, val) {
                    return acc + val;
                }, 0)
              }
              else {
                // roll again
                let diceRoll = 0
                let diceArray = []
                for (var i = 0; i < N; i++) {
                    diceRoll = Math.floor(Math.random() * X) + 1
                    diceArray.push(diceRoll)
                  }

                }
              }

            }


             

                res.json({
                    result1: result1,
                    result2: result2,
                    result3: result3,
                    result4: result4
                })

            })


// router.get('/', function(req, res) {
//
//   res.json({
//       result: dX,
//       result2: result2,
//       result3: result3,
//       result4: result4
//   })
//
// })

module.exports = router
