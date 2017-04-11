'use strict'
app.controller('DiceController', function($scope, DiceService, $http) {
    console.log("in the diceController");


    $scope.submitDice = function(data) {
        console.log("data", data);
        if(data.drop>data.dice){

          Materialize.toast('Number of drops must be less than number of dice to roll!', 4000)
        }
        if(data.keep>data.dice){

          Materialize.toast('Number of keeps must be less than number of dice to roll!', 4000)
        }
        if(data.explosive>=data.sides){

          Materialize.toast('Number of explosion must be less or equal to the number of sides!', 4000)
        }

        return $http.post('http://localhost:3000/dice', {
                data
            })
            .then(response => {
              $scope.result1 = response.data.result1
              $scope.result2 = response.data.result2
              $scope.result3 = response.data.result3
              $scope.result4 = response.data.result4

                console.log($scope.result1, $scope.result2, $scope.result3, $scope.result4)
            })

          }
    

})
