// Browserify will expose the events system module as well as the util system module.
var EventEmitter = require('events').EventEmitter,
  util = require('util');

function MyApp() {
  this.name = "CommonJS";
  this.start();
  EventEmitter.call(this);
}
// We can make use of node's util library to perform inheritance. Here we inherit the EventEmitter.
util.inherits(MyApp, EventEmitter);


MyApp.prototype.start = function StartApp() {
  console.log("Starting the application...");
  // Crux offers dynamic requirements, so that we can perform require() in functions, and not only at the top of the file.
  var myPluginComponent = require('./component');
  this.plugin = new myPluginComponent();
  console.log(this.plugin);
  setTimeout(function() {
    this.emit('ready');
  }.bind(this), 100);
}
var appObj = new MyApp();

appObj.on('ready', function OnAppReady() {
  console.log("Application is now ready!");
});

module.exports = appObj;