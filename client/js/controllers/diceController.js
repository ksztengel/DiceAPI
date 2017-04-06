'use strict'
app.controller('DiceController', function($scope, DiceService, $http) {
    console.log("in the diceController");


    $scope.submitDice = function(data){

      console.log("data", data);
      return $http.post('http://localhost:3000/dice', {data});
      // $scope.diceForm.$setPristine()

      }

      $scope.getData = function(example){
      return $http.get('http://localhost:3000/dice', {example});
      console.log("example", example);
    }
      })
