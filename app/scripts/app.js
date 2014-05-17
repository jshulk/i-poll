'use strict';

angular
  .module('iPollApp', [
        'ionic'
  ])
.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise("/");
  $stateProvider.state('home', {
     url : "/",
     templateUrl : "views/main.html",
     controller: 'MainCtrl'
  });

})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

