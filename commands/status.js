const ping = require('minecraft-server-util')
const Discord = require('discord.js')

module.exports = {
    name: "status",
    description: "status of mc server",
    execute(msg, args){
        ping("mc.kabkraft.com", 25565, (error, response) => {
            if (error) return msg.channel.send("Sorry! The server is offline! We'll be back soon!")
    
            const Embed = new Discord.MessageEmbed()
              .setTitle("Server Status")
              .addField("Server IP", response.host)
              .addField("Server Version", response.version)
              .addField("Online Players", response.onlinePlayers)
              .addField("Max Players", response.maxPlayers);
    
            message.channel.send(Embed);
        })
    }
}