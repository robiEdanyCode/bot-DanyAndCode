const Discord = require('discord.js')
const client = new Discord(
    {intents: ["GUILD_MEMEBERS","GUILDS","GUILD_MESSAGES"]}
)

client.on("ready", () => {
    console.log("Bot ONLINE!")
})