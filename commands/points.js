const Discord = require('discord.js')

module.exports = {
    name: "points",
    description: "not rigged points",
    execute(msg, args) {
        if(msg.author.id === "291633488535486474"){
            const riggedEmbed1 = new Discord.MessageEmbed()
                .setTitle("Points")
                .setColor("RANDOM")
                .setThumbnail(msg.author.avatarURL())
                .setDescription("Your total points!")
                .addField("Points", "You have the **maxium** amount of points! GG homie!")
            msg.channel.send(riggedEmbed1)
        } else {
            if(msg.author.id === "555413100816236564"){
                const riggedEmbed2 = new Discord.MessageEmbed()
                .setTitle("Points")
                .setColor("RANDOM")
                .setThumbnail(msg.author.avatarURL())
                .setDescription("Your total points!")
                .addField("Points", "You have the **maxium** amount of points! GG homie!")
            msg.channel.send(riggedEmbed2)
            } else {
                const nonRiggedEmbed = new Discord.MessageEmbed()
                .setTitle("Points")
                .setColor("RANDOM")
                .setThumbnail(msg.author.avatarURL())
                .setDescription("Your total points!")
                .addField("Points", "You have **no** points... you suck")
            msg.channel.send(nonRiggedEmbed)
            }
        } 
    }
}