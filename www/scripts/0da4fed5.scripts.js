"use strict";angular.module("iPollApp",["ionic"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/poll/retrieve/latest"),b.when("/poll","/poll/retrieve/latest"),a.state("poll",{url:"/poll",templateUrl:"views/parent.html"}),a.state("poll.retrieve",{url:"/retrieve",views:{"poll-container@poll":{templateUrl:"views/poll.html",controller:"PollCtrl"}}}),a.state("poll.retrieve.category",{url:"/:category",views:{"poll-list@poll.retrieve":{templateUrl:"views/poll_list.html",controller:"PollListCtrl"}}}),a.state("poll.show",{url:"/show/:pollID",views:{"poll-container@poll":{templateUrl:"views/poll_result.html",controller:"ShowpollCtrl"}}})}]).run(["$ionicPlatform",function(a){a.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()})}]),angular.module("iPollApp").controller("MainCtrl",["$scope","$ionicSideMenuDelegate",function(a,b){a.toggleCategories=function(){b.toggleLeft()}}]),angular.module("iPollApp").controller("PollCtrl",["$scope","$stateParams","$ionicSideMenuDelegate",function(a,b,c){console.log("poll state activated"),a.toggleCategories=function(){c.toggleLeft()}}]),angular.module("iPollApp").controller("PollListCtrl",["$scope","$stateParams",function(){console.log("poll list state activated")}]),angular.module("iPollApp").controller("ShowpollCtrl",["$scope",function(){console.log("show poll activated")}]);