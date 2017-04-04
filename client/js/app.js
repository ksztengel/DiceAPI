'use strict'
var app = angular.module("DiceAPI", ['ngRoute', 'ngAnimate'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/input.html',
            controller: 'DiceController'
        })

});
