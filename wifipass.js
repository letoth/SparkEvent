var request = require("request");
var fs = require('fs');
var options = { method: 'GET',
  url: 'https://ise12.budsuperlab.net:9060/ers/config/guestuser',
  qs: { filter: 'name.STARTSW.letoth' },
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/json',
     accept: 'application/json',
     authorization: 'Basic bGV2aWFwaTpsZXZpYXBpMTIz' },
   };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

//var l = reqBody.length;
//console.log(l);
//var jsonContent = JSON.parse(reqBody);
