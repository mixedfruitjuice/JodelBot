
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});

client.on('message', msg => {
  if (msg.content === 'kom vechten dan') msg.reply('ik klap jou niet tegen de vlakte maar er doorheen, beter kijk je uit');
});

client.login('MjUwNTI3OTQwMDc5NTE3Njk2.CxWJ2A.erPxka2lmrCYG4LVLl7ceGZt2Dw');
