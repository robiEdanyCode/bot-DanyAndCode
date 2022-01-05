const Discord = require('discord.js')
const client = new Discord.Client(
    {intents: ["GUILDS","GUILD_MESSAGES","GUILD_MEMBERS"]}
)

var checkBot = client.on("ready")

client.on("ready", () =>{
   var canale = client.channels.cache.get("928337857876209737")
   message.channel.send(canale)
})

client.on("messageCreate", (message) => {
    if(checkBot){
        message.channel.send("Il bot è ONLINE!")
    }
    else{
        message.channel.send("Il bot è OFFLINE!")
    }
})