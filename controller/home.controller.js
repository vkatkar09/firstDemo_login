(function() {
    var app = angular.module("myApp");

    var homeFunction = function($scope, $mdDialog) {
        $scope.status="";
        index=0;
        //$scope.items =['a','b','c'];
          $scope.addItem=function(ev){  
              
                // Appending dialog to document.body to cover sidenav in docs app
                var confirm = $mdDialog.prompt()
                  .title('What would you name your item?')
                  .placeholder('Your item name')
                  .ariaLabel('Item name')
                  .targetEvent(ev)
                  .required(true)
                  .ok('Okay!')
                  .cancel('Cancel');
            
                  
                $mdDialog.show(confirm).then(function($scope, result) {
                  $scope.items.push(result);
                  console.log($scope.items);
                }, function() {
                  $scope.status= 'You didn\'t name your item.';
                  console.log("cancel")
                });
              };
              
        
    
    }

    app.controller("homeController", homeFunction);

}());
