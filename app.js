var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .when("/login", {
        templateUrl : "views/login.html",
        controller: 'loginController',
    })
    .when("/green", {
        templateUrl : "views/green.html"
    })
    .when("/registration", {
        templateUrl : "views/registration.html",
        controller: "registrationController",
    });
});