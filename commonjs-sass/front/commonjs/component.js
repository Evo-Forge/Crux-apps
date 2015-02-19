/*
* Custom javascript component to be included
* */
var myPlugin = function MyCustomPlugin() {
  this.version = "1.2";
};

myPlugin.prototype.sayHello = function SayHello() {
  console.log("Hello world!");
};

module.exports = myPlugin;