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
  url: 'https://api.ciscospark.com/v1/team/memberships',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/json',
     authorization: 'Bearer ZjY3ZDQ1NGEtODA2MS00NTAxLTgyOGEtYTU1MWFlNmE3ZTkzMmI3YTBmNmYtM2I4' },
  body:
   { teamId: 'Y2lzY29zcGFyazovL3VzL1RFQU0vZDcwZjRmZjAtMGQ0Yy0xMWU3LWE2YzktNGY0Yjc5ZjUzZjY2',
     personEmail: email,
     isModerator: false },
  json: true };
  request(options, function (error, response, body)
  {
  console.log(response);
});
  }
