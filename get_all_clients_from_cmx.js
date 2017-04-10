process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var fs = require('fs');
var destination = fs.createWriteStream('cmx_kliensek');

var request = require("request");

var options = { method: 'GET',
  url: 'http://10.10.70.116/api/location/v2/clients/',
  headers:
   { 'cache-control': 'no-cache',
     authorization: 'Basic bGV2aWFwaTpsZXZpYXBpMTIz' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
//  console.log(body);
}).pipe(destination);
