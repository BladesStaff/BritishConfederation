const Discord = require('discord.js')

module.exports = {
    name: "8ball",
    description: "answers any yes or no question",
    execute(msg, args){
        if (!args[2]) return msg.channel.send("Please enter a full question!");
        let replies = [
          "Yes",
          "No",
          "My sources say yes",
          "Doubtful",
          "Outlook good",
          "Outlook not good",
          "I don't know",
          "Ask again later",
          "Better not tell you now"
        ];
        let question = args.join(" ");
        let result = Math.floor(Math.random() * replies.length);
    
        let answer8ballembed = new Discord.MessageEmbed()
          .setAuthor(msg.author.tag)
          .setColor("#FF9900")
          .addField("Question asked", question)
          .addField("Answer", replies[result]);
    
        msg.channel.send(answer8ballembed);
        console.log(question);
    }
}