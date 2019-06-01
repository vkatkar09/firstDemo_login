(function() {
    var app = angular.module("myApp");

    var loginFunction = function($scope, $window) {
        $scope.loginError=false;
        $scope.formSubmit = function(){
           
            if($scope.username == 'admin' && $scope.password =='admin'){
                
                $window.location.href = '/#!/home';
 
            }
            else {
            $scope.loginError=true;    
            }
        }        
    
    }

    app.controller("loginController", loginFunction);

}());
