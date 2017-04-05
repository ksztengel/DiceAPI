'use strict'
app.controller('DiceController', function($scope, DiceService, $http) {
    console.log("in the diceController");
    $scope.diceForm = {}

    $scope.submitDice = function(data){

      console.log("data", data);

      return $http.post('http://localhost:3000/dice', {data});

      }

    })
