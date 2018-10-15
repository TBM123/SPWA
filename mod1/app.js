(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch_menu = "";
  $scope.lunch_message = "";

  $scope.checkLunch = function (){
    if ($scope.lunch_menu){
      var lunch_items = $scope.lunch_menu.split(",");
      lunch_items = lunch_items.filter(v=>v.trim()!='');
      if (lunch_items.length > 3){
        $scope.lunch_message = "Too much!";
      } else {
        $scope.lunch_message = "Enjoy!";
      }
    } else {
      $scope.lunch_message = "Please enter data first";
    }
  }
}

})();
