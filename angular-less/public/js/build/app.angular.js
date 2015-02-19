(function(window, angular, $) {
(function() {
// File: util.js
/*
* Custom angular and project-related utilities.
* */


var _states = {};

/* We place our defineState() function on angular. */
angular.defineState = function DefineState(stateName, stateOptions) {
  if(typeof stateName !== 'string') throw new Error('Invalid state name: ' + stateName);
  if(typeof _states[stateName] !== 'undefined') throw new Error('State already exists: ' + stateName);
  _states[stateName] = stateOptions;
  return angular;
};
angular.getStates = function GetDefinedStates() {
  return _states;
};

var _controllerModule = null,
  _controllerDependencies = [];
/* We pretty much define a custom controller registration */
angular.defineController = function DefineController(name) {
  if(_controllerModule === null) {
    _controllerModule = angular.module('app.controllers', _controllerDependencies);
  }
  return _controllerModule.controller.apply(_controllerModule, arguments);
};
})();
(function() {
// File: controllers/home.js

angular.defineState('landing', {
  url: '/',
  templateUrl: 'home',
  controller: 'HomeCtrl'
});

angular.defineController('HomeCtrl', function($scope) {
  $scope.time = new Date();
});

})();
(function() {
// File: config/development.js
window.CONFIG = {
  ver: '1.0.0'
};
})();
(function() {
// File: app.js
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
})();
(function() {
// File: directives/myDirective.js
/**
 * Class File: myDirective
 * Created by Snoopy on 19-Feb-15.
 */
// directive code
})();
(function() {
// File: services/myservice.js
/**
 * Class File: myservice
 * Created by Snoopy on 19-Feb-15.
 */

var app = angular.module('app.services', []);

app.service('myService', function($rootScope) {
    // service code...
});
})();
})(window, window['angular'] || {}, window['jQuery'] || window['$'] || {});