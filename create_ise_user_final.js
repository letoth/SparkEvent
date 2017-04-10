process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var fs = require("fs");
var sleep = require('sleep');

console.log("\n *TEXT FILE PARSING* \n");
// Get content from file
var contents = fs.readFileSync("meghivottak.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
// Get Value from JSON
var l = jsonContent.length;
console.log(l);

var limit = require("simple-rate-limiter");
var request = limit(require("request")).to(3).per(1000);
for (var i = 0; i < l; i++) {
  var email = JSON.stringify(jsonContent[i].email);
  email = email.replace(/"/g,"");
  var options = { method: 'POST',
  url: 'https://ise12.budsuperlab.net:9060/ers/config/guestuser',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/xml',
     accept: 'application/xml',
     authorization: 'Basic bGV2aWFwaTpsZXZpYXBpMTIz' },
  body: '<?xml version="1.0" encoding="utf-8" standalone="yes"?> <ns3:guestuser xmlns:ns2="ers.ise.cisco.com" xmlns:ns3="identity.ers.ise.cisco.com">\n<customFields/>\n<guestAccessInfo>\n   <fromDate>03/20/2017 08:00</fromDate> <location>Budapest</location>\n   <toDate>03/23/2017 23:00</toDate>\n   <validDays>4</validDays>\n</guestAccessInfo>\n<guestInfo>\n  <enabled>true</enabled>\n  <notificationLanguage>Hungarian</notificationLanguage>\n  <password></password>\n  <smsServiceProvider>Global Default</smsServiceProvider>\n   <userName>'+email+'</userName>\n</guestInfo>\n<guestType>Daily (default)</guestType>\n<portalId>f39a7a40-95a4-11e4-9855-005056865a9c</portalId>\n</ns3:guestuser>' };
  request(options, function (error, response, body)
  {
  console.log(response);
});
  }
