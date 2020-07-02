const Discord = require("discord.js");

module.exports = {
  name: "eradicate",
  description: "NEVER RUN THIS COMMAND OH GOD OH GOD",
  execute(msg, args) {
    if (!msg.member.hasPermission("ADMINISTRATOR"))
      return msg.author.send("no");
    let targetUser = msg.mentions.users.first();

    if (!targetUser) return msg.channel.send("No user targeted!");

    targetUser.send("You just got eradicated... f");
    targetUser.send(`hi from ${msg.author.username}`).then(
      setTimeout(() => {
        targetUser.send(`hi from ${msg.author.username}`);
      }, 2500),
      setTimeout(() => {
        targetUser.send(`hi from ${msg.author.username}`);
      }, 2500),
      setTimeout(() => {
        targetUser.send(`hi from ${msg.author.username}`);
      }, 2500),
      setTimeout(() => {
        targetUser.send(`hi from ${msg.author.username}`);
      }, 2500),
      setTimeout(() => {
        targetUser.send(`hi from ${msg.author.username}`);
      }, 2500),
      setTimeout(() => {
        targetUser.send(`hi from ${msg.author.username}`);
      }, 2500),
      setTimeout(() => {
        targetUser.send(`hi from ${msg.author.username}`);
      }, 2500),
      setTimeout(() => {
        targetUser.send(`we're done here now, sorry mate.`);
      }, 2500)
    );
  }
};
