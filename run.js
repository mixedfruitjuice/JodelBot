const Discord = require("discord.js");
const client = new Discord.Client();
var Messages = {};

var messages = {
	"kom vechten dan" : "ik klap jou niet tegen de vlakte maar er doorheen, beter kijk je uit", 
	"je bent echt een flappie" : "kijk uit, ik weet waar je bed slaapt",
	"hond" : "Hoe jij mij genoeme hebben?",
	"hmm" : "dit is een communistische server, nadenken is niet toegestaan"
};

var mentionReplies = ["Donder op joe met je graftakkenface", "Beter begin je je kop te houden anders maak ik je kop nog lelijker dan die nu al is", "Laat me met rust, bots hebben ook een leven", "Nee flikker op"];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});

client.on('message', msg => {
    var content = msg.content.toLowerCase();
    var number = Math.floor(Math.random() * 4);

    if (messages[content]) {
	msg.reply(messages[content]);
    }

    if (msg.isMentioned(client.user)) {
        msg.reply(mentionReplies[number]);
    }

   if (msg.content.startsWith("spam") && msg.content.length > 5) {
	while (number < 30) {	
		msg.channel.sendMessage(msg.content.substr(4, 30));
  		number++
 	}
   }
});

client.on('guildMemberAdd', member => {
    member.sendMessage("Welcome bij de Jodel Vereniging! PM Justen of Jeroen als je hulp nodig hebt! :wink: Neem ook even een kijkje bij #welcome en #karma. Veel plezier!");
});

client.login('MjUwNTI3OTQwMDc5NTE3Njk2.CxWJ2A.erPxka2lmrCYG4LVLl7ceGZt2Dw');
