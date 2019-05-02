(function() {
    var app = angular.module("myApp");

    var registrationFunction = function($scope, $window) {
        $scope.loginError=false;
        $scope.register = function(){
            $window.location.href = '/#!/login';
            // if($scope.password != $scope.confirmPassword){
            //     alert("Passwords don't match!");
            // }
        }        
    
    }

    app.controller("registrationController", registrationFunction);

}());
