/*
* Demo angular app
* */
//var app = angular.module('app', ['ui.router', 'app.controllers']);

var app = angular.module('app', ['ui.router', 'app.controllers','app.services', 'app.views']);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  var _states = angular.getStates();
  for(var stateName in _states) {
    $stateProvider.state(stateName, _states[stateName]);
  }
});

app.run(function($rootScope) {
  console.log('App running');
});