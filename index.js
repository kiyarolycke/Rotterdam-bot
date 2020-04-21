const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("Rotterdam The Netherlands", {type: "PLAYING"});

});

bot.on("message", async message => {

        if(message.author.bot) return;

        if(message.channel.type === "dm") return;

        var prefix = botConfig.prefix;

        var messageArrey = message.content.split(" ");

        var command = messageArrey[0];

        var arguments = messageArrey.slice(1)

        if(command === `${prefix}hallo`){

            return message.channel.send("Hallo")
        }
})

bot.login(botConfig.token);