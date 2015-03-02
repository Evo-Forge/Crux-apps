/**
* This is a custom crux component that will be loaded by app.js For more on this, please visit
 *  http://crux.pearlhq.com/docs/crux.Component.html
* */

var Component = crux.Component;

Component.require(['log']);

// We may set our default config
Component.default({
  my: "key",
  debug: false
});


var Custom = function CustomCruxComponent() {
  Custom.super_.apply(this, arguments);
  this.name = 'custom';
  this.key = null;
  this.obj = null;
  log.debug('Custom crux component instantiated.');
};

Component.inherits(Custom);

/**
* This function will be run right after our component has been instantiated
* */
Custom.prototype.init = function Initialize() {
  log.debug('Custom crux component initializing...');
};

/**
* This function will be run once all components are initialized and ready to run
* */
Custom.prototype.run = function Run(done) {
  log.debug('Custom crux component started running.....');
  setTimeout(function() {
    done();
  }, 300);
};

/**
* This is all that Crux asks from you when you implement your own component. From here on, you can add as much functionality
 * as you like. Also, once the crux application is started, your component is now available via
 * app.component('custom');. This will return a reference to your component's object. 
 * Happy coding!
* */

module.exports = Custom;