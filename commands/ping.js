const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: "ping",
    description: "shows bots ping",
    execute(msg, args, bot){
        const pingEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("🏓 Pong")
        .addField("**Ping**:", `\`${Math.round(bot.ws.ping)} ms\``)

    msg.channel.send(pingEmbed);
    }
}