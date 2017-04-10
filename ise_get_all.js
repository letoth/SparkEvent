process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var fs = require('fs');
var destination = fs.createWriteStream('ise_idk');

var request = require("request");

var options = { method: 'GET',
  url: 'https://ise12.budsuperlab.net:9060/ers/config/guestuser?page=1&size=100&sortasc=lastName',
  headers:
   { 'cache-control': 'no-cache',
   'content-type': 'application/json',
   accept: 'application/json',
   authorization: 'Basic bGV2aWFwaTpsZXZpYXBpMTIz' }
 };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log("body ok");
}).pipe(destination);
