const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "vote",
  description: "starts a legislative vote",
  execute: async (msg, args) => {
    if (!msg.member.hasPermission("MANAGE_MESSAGES"))
      return msg.channel.send("You lack the permissions to run this command");
    let voteMessage = args.slice(1).join(" ");
    if (!args[0])
      return msg.channel
        .send("Please specify a time length (eg: 5s, 5m, 5h")
        .then(m => m.delete({ timeout: 5000 }));
    if (!voteMessage)
      return msg.channel
        .send("Please specify what to vote on")
        .then(m => m.delete({ timeout: 5000 }));

    const voteEmbed = new Discord.MessageEmbed()
      .setTitle("Legislative Vote")
      .setColor("RANDOM")
      .setDescription(`Started by ${msg.author.tag}`)
      .setThumbnail(msg.author.avatarURL())
      .addField("Vote", voteMessage)
      .setFooter('Ends at')
      .setTimestamp(Date.now() + ms(args[0]))
    msg.delete().catch();
    msg.channel.send("||@everyone||").then(m => m.delete({ timeout: 500 }));
    let m = await msg.channel.send(voteEmbed);
    m.react("✅");
    m.react("❌");
    setTimeout(() => {
      if (m.reactions.cache.get("✅").count >= 4) {
        msg.channel.send("@everyone").then(m => m.delete({ timeout: 500 }));
        const winEmbed = new Discord.MessageEmbed()
          .setTitle("Vote Passage")
          .setColor("RANDOM")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/702566997292089374/724238953477177384/AdzTrzdeRCYoAAAAAElFTkSuQmCC.png"
          )
          .addField("Proposed", voteMessage)
          .setFooter("This vote passed 2/3 or more of parliament")
          .setTimestamp();
        return msg.channel.send(winEmbed);
      } else {
        msg.channel.send("@everyone").then(m => m.delete({ timeout: 500 }));
        const loseEmbed = new Discord.MessageEmbed()
          .setTitle("Vote Failure")
          .setColor("RED")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/702566997292089374/724239433942958110/Z.png"
          )
          .addField("Proposed", voteMessage)
          .setFooter("This vote failed to pass 2/3 of parliament")
          .setTimestamp();
        return msg.channel.send(loseEmbed);
      }
    }, ms(args[0]));
  }
};

