const Discord = require('discord.js')

module.exports ={
    name: "help",
    description: "displays bot commands",
    execute(msg, args, bot){
        const helpembed = new Discord.MessageEmbed()
      .setTitle("Commands List")
      .setDescription("Commands for <@708483334849953815>")
      .setThumbnail(bot.user.avatarURL())
      .addField("Prefix", "used infront of every command to run them")
      .addField("ping", "Returns pong!")
      .addField("suicide", "NEVER EVER RUN THIS COMMAND OH MY GOD YOU WILL FUCKING DIE JESUS CHRIST STOP IT NOW")
      .addField("image", "Returns an image you searched up")
      .addField("status", "Returns status of the minecraft server")
      .addField(
        "kick",
        "**For moderator use** Kicks target member from the server"
      )
      .addField(
        "exile",
        "**For moderator use** Bans/exiles target member from the server"
      )
      .addField("say", "Reposts message as the bot saying it")
      .addField("Embed", "Posts message as an embed")
      .addField("vote", "Starts a vote, useful for legislative action")
      .addField(
        "Announce",
        "Announces message as an embed and messages @.everyone"
      )
      .addField("joke", "Returns a joke")
      .addField("Roll", "Rolls a 6 sided die")
      .addField("Flip", "flips a coin")
      .addField("Weather", "returns weather for searched location")
      .addField("calc", "Calculates a mathmatical equation")
      .addField("onionhat", "Returns onionhat :)")
      .addField("countdown", "Starts a countdown: ie: !countdown 50 s|m|h")
      .addField("8ball", "answers your yes or no questions")
      .addField("rps", "Plays rock paper scissors with the bot: ie: !rps rock");

    msg.channel.send(helpembed);
    }
}

