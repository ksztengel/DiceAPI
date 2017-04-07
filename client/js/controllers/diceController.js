'use strict'
app.controller('DiceController', function($scope, DiceService, $http) {
    console.log("in the diceController");


    $scope.submitDice = function(data) {
        console.log("data", data);
        return $http.post('http://localhost:3000/dice', {
                data
            })
            .then(response => {
              $scope.result = response.data.result
              $scope.result2 = response.data.result2
              $scope.result3 = response.data.result3,

                console.log($scope.result, $scope.result2, $scope.result3)
            })

          }
    // $scope.diceForm.$setPristine()

})
