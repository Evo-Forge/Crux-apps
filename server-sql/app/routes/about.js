module.exports = function InitRoute(Route) {
  

  /* We define a custom security point in the contact namespace.
  * After it has been defined, it can be executed from any route through "contact:verifyEmail"
  * */
  Route
    .get('/', 'About page')
    .then(function() {
      var self = this;
      this.model('account').find({
        id: 1
      }).then(function(accountObj) {
        if(accountObj) {
          return self.json(accountObj);
        }
        log.debug('No account for %s', 1);
        self.json({
          "my": "account",
          "isNot": "active"
        })
      }).error(this.error.bind(this));
    });
  
};