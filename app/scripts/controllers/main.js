'use strict';

angular.module('iPollApp')
  .controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {
    
    $scope.toggleCategories = function(){
    	$ionicSideMenuDelegate.toggleLeft();
    };

  });
