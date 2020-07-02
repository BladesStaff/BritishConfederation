const Discord = require('discord.js')

module.exports = {
    name: 'embed',
    description: 'send embed message',
    execute(msg, args){
    if (!msg.member.hasPermission("MANAGE_MESSAGES"))
    return msg.channel.send("You lack the permissions to run this command");
    let message1 = args.join(" ");
    msg.delete().catch();

    const embedcmd = new Discord.MessageEmbed()
      .setTitle("Embeded Message")
      .setColor("#30BFBF")
      .setThumbnail(msg.author.avatarURL())
      .addField("Message sent", message1)
      .setFooter(`Sent by ${msg.author.tag}`);

    msg.channel.send(embedcmd);
    }
}