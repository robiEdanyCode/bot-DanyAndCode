const Discord = require('discord.js')
const client = new Discord.Client(
    {intents: ["GUILDS","GUILD_MESSAGES","GUILD_MEMBERS"]}
)
client.login(process.env.token)

client.on("messageCreate", (message) => {


    if(message.content == "!on"){
        if(message.member.roles.cache.has("928268650593533973")) {
            message.channel.send("Il bot funziona correttamente")
        }
        else{
            message.channel.send("Non hai il ruolo adatto!")
        }
    }


    // KICK USER

    if(message.content.startsWith("!kick")){
        var utentekick = message.mentions.members.first();

        if(!utentekick){
            message.channel.send("Devi specificare l'utente da kickare!");
            return;
        }

        if(!message.member.permissions.has('KICK_MEMBERS')){
            message.channel.send("Non hai il permesso!");
            return;
        }

        if(!utentekick.kickable){
            message.channel.send("Il bot non ha il permesso");
            return;
        }

        utentekick.kick()
        .then(() => message.channel.send("<@" + utentekick + "> è stato kickato!"))
    }

    // BAN USER

    if(message.content.startsWith("!ban")){
        var utenteban = message.mentions.members.first();

        if(!utenteban){
            message.channel.send("Devi specificare l'utente da bannare!");
            return;
        }

        if(!message.member.permissions.has('BAN_MEMBERS')){
            message.channel.send("Non hai il permesso!");
            return;
        }

        if(!utenteban.kickable){
            message.channel.send("Il bot non ha il permesso");
            return;
        }

        utenteban.ban()
        .then(() => message.channel.send("<@" + utenteban + "> è stato bannato!"))
    }

    if(message.content == "!admin"){
        if(message.member.roles.cache.has("928268650593533973")) {
            message.channel.send("Benvenuto nella schermata dell'Admin")
        }
        else{
            message.channel.send("Non hai il ruolo adatto!")
        }
    }

    if(message.content.startsWith("!clear")){
        if(!message.member.permissions.has("MANAGE_MESSAGES")){
            message.channel.send("Non hai il permesso!")
            return;
        }
        if(!message.guild.me.permissions.has("MANAGE_MESSAGES")){
            message.channel.send("Non ho il permesso!")
            return;
        }

        var numMsg = message.content.slice(7);
        count = parseInt(numMsg);

        if(!numMsg){
            message.channel.send("Inserisci un numero valido!")
            return;
        }
        message.channel.bulkDelete(numMsg, true);
        message.channel.send("Ho eliminato " + numMsg + " messaggi!")
        .then(msg => {
            msg.delete({timeout: 2000})
        })
    }
})

client.on("ready", () => {
    console.log("Bot ONLINE!")
})