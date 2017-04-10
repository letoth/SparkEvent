//
// Copyright (c) 2016 Cisco Systems
// Licensed under the MIT License
//

/*
 * a Cisco Spark bot that:
 *   - sends a welcome message as he joins a room,
 *   - answers to a /hello command, and greets the user that chatted him
 *   - supports /help and a fallback helper message
 *
 * + leverages the "node-sparkclient" library for Bot to Cisco Spark communications.
 *
 */

var SparkBot = require("node-sparkbot");
var bot = new SparkBot();
//bot.interpreter.prefix = "#"; // Remove comment to overlad default / prefix to identify bot commands

var SparkAPIWrapper = require("node-sparkclient");
if (!process.env.SPARK_TOKEN) {
    console.log("Could not start as this bot requires a Cisco Spark API access token.");
    console.log("Please add env variable SPARK_TOKEN on the command line");
    console.log("Example: ");
    console.log("> SPARK_TOKEN=XXXXXXXXXXXX DEBUG=sparkbot* node helloworld.js");
    process.exit(1);
}
var spark = new SparkAPIWrapper(process.env.SPARK_TOKEN);


//
// Help and fallback commands
//
bot.onCommand("help", function (command) {
    spark.createMessage(command.message.roomId, "A következő parancsok állnak rendelkezésre : \n\n **/hotel** - Általános infók a szállással kapcs.\n\n **/activity** - Playstation VR kipróbálási lehetőség, CMX demó, Sparkboard\n\n**/wifipass** - a wifi hálózathoz való kapcsolódáshoz\n\n **/program** - a honlapon található program megtekintése \n\n\ **/now** - Az éppen zajló előadások \n\n **/next** - A következő előadások  \n\n **/lunch** - Ebéd menü\n\n **/dinner**  - Vacsora menü\n\n**/wellness** - Hasznos információk a wellness használattal kapcsolatban\n\n **/vr** - a Sony PLaystation VR sisak bemutatása\n\n **/beer** - A vacsora mellé fogyasztható kézművessör-kínálat\n\n **/prizes** - Összefoglaló a nyereményekről\n\n**/workshop** - a délutáni workshopokról rövid leírás", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
//bot.onCommand("fallback", function (command) {
//    spark.createMessage(command.message.roomId, "Ezt a parancsot nem ismerem,\n\n próbáld a /help parancsot.", { "markdown":true }, function(err, response) {
//        if (err) {
//            console.log("WARNING: could not post Fallback message to room: " + command.message.roomId);
//            return;
//        }
//    });
//});


//
// Bots commands here
//
bot.onCommand("hotel", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "A szobát 15:00-tól foglalhatja el.\n\n Kérjük a második napon 10:00-ig hagyja el a szobát.\n\n A fennmaradó időben csomagját leadhatja a recepció melletti csomagszobába.\n\n \n\n Reggeli az éttermeben lesz elérhető 07:00-09:00-ig.\n\n A parkolás ingyenes a hotel parkolójában." + email + "> !", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});

bot.onCommand("program", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "A rendezvény programja itt látható : http://ciscoevents.hu/2017/techtorial/#Program ", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});

bot.onCommand("activity", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "A következő aktivitásokat tudja meglátogatni az I. terem előtti területen:\n\n - CMX demó \n\n- Sparkboard demó \n\n- T-systems lounge \n\n- Playstation VR kipórbálható demó \n\n\n\nA rendezvény területén ingyenes mobil töltőállomásokat is biztosítunk. ", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("lunch", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "Az ebéd menü a következő:\n\nLevesek\n\nSaláták\n\nSzendvicsek\n\n\n\nA fogyasztható italok:\n\nSzénsavas üdítők\n\nÁsványvíz\n\nGyümölcslé\n\nKávé, Tea", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("dinner", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "A vacsora menü a következő:\n\nLevesek\n\nSaláták\n\nFőételek\n\nDesszert\n\n\n\nA fogyasztahtó italok: \n\nPántlika Olaszrizling\n\nIKON Rosé\n\nIKON Merlot\n\nSzénsavas üdítők \n\nÁsványvíz\n\n Gyümölcslé\n\n Kávé, Tea", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("wellness", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "A rendezvény résztvevői számára a wellness meghosszabbított nyitvatartással 23:00-ig tart nyitva.\n\nPapucsot és fürdőköpenyt a szobában találsz.", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("vr", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "Az I. terem előtti részen kipróbálhatod a Sony Playstation VR-t. Ne feledd, hogy Viola kolléganőm által küldött kérdőív kitöltői között egy ugyanilyen eszközt sorsolunk ki!", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("beer", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "Az este szponzora az S&T Magyarország. Jóvoltukból lehetőséged van kézműves söröket is fogyasztani az I. terem előtti területen.", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});

bot.onCommand("prizes", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "A következő nyeremény lehetőségek vannak a Cisco Techtorial 2017 rendezvényen:\n\n3 db Cisco Meraki eszköz, amelyeket azok között sorsolunk ki, akik legalább 3 előadást értékeltek és a második nap végén is jelen vannak.\n\n1 db Sony PLaystation 4 konzol (3 játékkal), valamint egy hozzátartozó Sony VR sisak, amelyet a VIola által küldött kérdőív kitöltői között sorsolunk ki. A győztest a Spark alkalmazásban értesítjük.\n\n\n\nJó értékeltést és sok sikert!", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});

bot.onCommand("workshop", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "Az első nap délutánján 3 különböző workshopon vehet részt:\n\n\n\nWorkshop I. - információk\n\nWorkshop II. - információk\n\nWorkshop III. - információk\n\nA workshopokra nem szükséges külön jelentkezni. ", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});

//
// Welcome message
// sent as the bot is added to a Room
//
bot.onEvent("memberships", "created", function (trigger) {
    var newMembership = trigger.data; // see specs here: https://developer.ciscospark.com/endpoint-memberships-get.html
    if (newMembership.personId != bot.interpreter.person.id) {
        // ignoring
        console.log("new membership fired, but it is not us being added to a room. Ignoring...");
        return;
    }

    // so happy to join
    console.log("bot's just added to room: " + trigger.data.roomId);

    spark.createMessage(trigger.data.roomId, "Hello! Én Barbi csevegő robot vagyok!\n\nÍrd be hogy /help és segítek!", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + trigger.data.roomId);
            return;
        }

        if (message.roomType == "group") {
            spark.createMessage(trigger.data.roomId, "**Ez egy 'Csoport' szoba. Csak akkor válaszolok ha említetek! (@Barbi).**", { "markdown":true }, function(err, message) {
                if (err) {
                    console.log("WARNING: could not post Mention message to room: " + trigger.data.roomId);
                    return;
                }
            });
        }
    });
});
