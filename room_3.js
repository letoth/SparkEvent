//var contents = response.request.body;

var fs = require("fs");
//console.log("\n *TEXT FILE PARSING* \n");
// Get content from file
var contents = fs.readFileSync("cmx_kliensek");
// Define to JSON type
var jsonContent = JSON.parse(contents);
// Get Value from JSON
var l = jsonContent.length;
var w = 0;
//console.log("total",l,"darab eszkoz osszesen");
for (i = 0; i < l; i++) {
  var zone = JSON.stringify(jsonContent[i].mapInfo.mapHierarchyString);
  
    if (zone === '"Budapest>Azur>Techtorial>Terem III."' && jsonContent[i].userName != "") {
        w = w + 1
	var request = require("request");
        var options = {
            method: 'POST',
            url: 'https://api.ciscospark.com/v1/memberships',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                authorization: 'Bearer ZjY3ZDQ1NGEtODA2MS00NTAxLTgyOGEtYTU1MWFlNmE3ZTkzMmI3YTBmNmYtM2I4'
            },
            body: {
                roomId: 'Y2lzY29zcGFyazovL3VzL1JPT00vZTY0OTk3YzAtMGNlYi0xMWU3LTg5YzUtOGY3YTc2MDllNDNm',
                personEmail: jsonContent[i].userName,
                isModerator: false
            },
            json: true
        };

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

//            console.log(body);
        });
    console.log(jsonContent[i].userName);
    }
}

console.log("\n",w," vendeg erzekleve az III. teremben, Spark meghivas OK \n");

//var request = require("request");
