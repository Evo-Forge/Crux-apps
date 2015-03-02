/**
 * We can actually extend crux's HTTP Server Request, by attaching functions to its prototype, that will be later
 * available in our route endpoints.
 * */
var Request = crux.Server.Request;

/*
 * Returns the user's IP address
 * */
Request.prototype.getIp = function GetIp() {
  return this.req.headers['x-forwarded-for'] || this.req.connection.remoteAddress;
};

/**
* Note that "this" refers to the request context of each individual HTTP request, thus under this.req and this.res are the
 * express objects holding the req/res 
* */
Request.prototype.sayHello = function SayHello() {
  this.json({
    hello: "world"
  });
};