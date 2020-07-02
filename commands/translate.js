const translate = require("@vitalets/google-translate-api");
const Discord = require('discord.js')

module.exports = {
    name: "translate",
    description: "translates message to english", 
    execute(msg, args){
        translate(args.join(" ")).then(res => {
            console.log(res.text);
            const translateEmbed = new Discord.MessageEmbed()
              .setTitle("Translation")
              .setColor("RANDOM")
              .setThumbnail(msg.author.avatarURL())
              .setDescription("Translating your input since legit 2 seconds ago")
              .addField("Input", args.join(" "))
              .addField("Output", res.text);
            msg.channel.send(translateEmbed);
          });
    }
}