var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

  	// Now set up the states
  	$stateProvider
    .state('state1', {
      url: "/",
      templateUrl: "partials/landing.html"
    })
    .state('state2', {
      url: "/build",
      templateUrl: "partials/build.html"
    })
    .state('state3', {
      url: "/th",
      templateUrl: "partials/customize.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});


app.controller('MainCtrl', function($http, $scope){

});


