const Discord = require("discord.js");
const client = new Discord.Client();
var Messages = {};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});

client.on('message', msg => {
    if (msg.content === 'kom vechten dan') msg.reply('ik klap jou niet tegen de vlakte maar er doorheen, beter kijk je uit');

    if (msg.content == 'je bent echt een flappie') {
        msg.reply('kijk uit, ik weet waar je bed slaapt');
    }

    if (msg.isMentioned(client.user)) {
        msg.reply(msg.author);
    }

    Messages[msg.author]++;
    console.log(Messages[msg.author]);
    if (Messages[msg.author] == 2) {
        msg.reply("Hou toch eens een keer je bek");
    }
});

client.on('guildMemberAdd', member => {
    member.sendMessage("Welcome bij de Jodel Vereniging! PM Justen of Jeroen als je hulp nodig hebt! :wink: Neem ook even een kijkje bij #welcome en #karma. Veel plezier!");
});

client.login('MjUwNTI3OTQwMDc5NTE3Njk2.CxWJ2A.erPxka2lmrCYG4LVLl7ceGZt2Dw');
