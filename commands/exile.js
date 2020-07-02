

module.exports = {
    name: "exile",
    description: "exiles/bans target user",
    execute(msg, args){
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
            msg.reply("You lack permissions to run this command!");
          }
      
          const user = msg.mentions.users.first();
          if (!user) {
            msg.reply("Mention a user to exile!");
          }
      
          const member = msg.guild.member(user);
          if (member) {
            member.ban(`Member was exiled from the server`).then(() => {
              msg.reply(`User was banished from this realm, my god be on their side`);
            });
          }
    }
}