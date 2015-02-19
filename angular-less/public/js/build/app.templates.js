(function(angular) {
var m = angular.module("app.views", []);
m.run(["$templateCache", function(t) {t.put("about", undefined);}]);
m.run(["$templateCache", function(t) {t.put("contact", undefined);}]);
m.run(["$templateCache", function(t) {t.put("home", "<section> <div class=\"container\"> <div class=\"row\"> <div class=\"col-lg-12 text-center\"> <h2>Hello world! You're on /home</h2> </div> </div> </div> </section>");}]);
})(window['angular']);