
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});

client.on('message', msg => {
  if (msg.content === 'kom vechten dan') msg.reply('ik klap jou niet tegen de vlakte maar er doorheen, beter kijk je uit');
	
  if (msg.content == 'je bent echt een flappie') {
	msg.reply('kijk uit, ik weet waar je bed slaapt');
  }
});

client.on('guildMemberAdd', member => {
member.sendMessage("Welcome bij de Jodel Vereniging! PM Justen of Jeroen als je hulp nodig hebt! :wink: Neem ook even een kijkje bij #welcome en #karma. Veel plezier!");
});

client.login('MjUwNTI3OTQwMDc5NTE3Njk2.CxWJ2A.erPxka2lmrCYG4LVLl7ceGZt2Dw');
