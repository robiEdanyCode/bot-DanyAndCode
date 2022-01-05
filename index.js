const Discord = require('discord.js');
const client = new Discord.client(
    {intents: ["GUILD_MEMEBERS","GUILDS","GUILD_MESSAGES"]}
);
client.login("OTI3NjUxMjU4MTA4NjM3MjQ0.YdNUjg.aR8-eCLyezvLKcpxGMVq7A2L1JM");

client.on("ready", () => {
    console.log("Bot ONLINE!")
})