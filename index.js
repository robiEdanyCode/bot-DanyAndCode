const Discord = require('discord.js');
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]}
)
client.login(process.env.token);

client.on("ready", () => {
    console.log("Bot ONLINE")
})