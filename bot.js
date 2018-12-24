const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526551888745988119")
setInterval(function() {
channel.send(`الله اكبر محمد رسول الله لا اله الا الله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
