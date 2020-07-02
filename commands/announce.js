const Discord = require('discord.js')

module.exports = {
    name: "announce",
    description: "announces message",
    execute(msg, args, bot){
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
            return msg.channel.send("You lack the permissions to run this command");
          }

          let message1 = args.join(" ");

          msg.delete().catch();
      
          const announcementembed = new Discord.MessageEmbed()
            .setTitle("NATIONAL ANNOUNCEMENT")
            .setColor("RANDOM")
            .setDescription("National Announcement Embed")
            .setThumbnail(
              "https://images-na.ssl-images-amazon.com/images/I/51hsvqDjXqL._AC_SX425_.jpg"
            )
            .addField("Announcement Message", message1)
            .setFooter(`Sent by ${bot.user.username}`);
      
          msg.channel.send("||@everyone||");
          msg.channel.send(announcementembed);
    }
}