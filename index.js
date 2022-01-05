const Discord = require('discord.js');
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]}
)
client.login("OTI3NjUxMjU4MTA4NjM3MjQ0.YdNUjg.jzrGGEvZnZjhtWWZMeRNYisOEjo");

client.on("ready", () => {
    console.log("Bot ONLINE")
})