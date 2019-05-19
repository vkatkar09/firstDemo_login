(function() {
    var app = angular.module("myApp");

    var registrationFunction = function($scope, $window) {
        $scope.regError=false;
        
        $scope.register = function(){
            console.log($scope.lastName)
            if($scope.firstName == undefined || 
               $scope.lastName==undefined ||
               $scope.userName==undefined ||
               $scope.password==undefined ||
               $scope.confirmPassword==undefined ||
               $scope.email==undefined ||
               $scope.contactNo== undefined
               )
          {
            console.log("In if statement");

            $scope.regError=true;
           } 
           else{
            $window.location.href = '/#!/test';
           }
           
        }        
     
    }

    app.controller("registrationController", registrationFunction);

}());
