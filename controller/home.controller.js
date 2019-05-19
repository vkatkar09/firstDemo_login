(function() {
    var app = angular.module("myApp");

    var homeFunction = function($scope, $mdDialog) {
      $scope.items=[];
      
      $scope.delete = function(name){
        var arrayLength = $scope.items.length;
        for (var i = 0; i < arrayLength; i++) {
          if ($scope.items[i].name == name)
          {
            $scope.items.splice(i,1)
          }
        }
      }

      $scope.addItem=function(ev){  
              // Appending dialog to document.body to cover sidenav in docs app
              var confirm = $mdDialog.prompt()
                .title('What would you name your item?')
                .placeholder('Your item name')
                .targetEvent(ev)
                .required(true)
                .ok('Okay!')
                .cancel('Cancel');
          
                
              $mdDialog.show(confirm).then(function(result) {
                temp = {"name": result, "description": "description for " + result}
                $scope.items.push(temp);
              }, function() {
                console.log("No item found")
              });
            }; 
  }

    app.controller("homeController", homeFunction);

}());
