

module.exports ={
    name: "kick",
    description: "kicks targeted user",
    execute(msg, args){
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
            msg.reply("You lack permissions to run this command!");
          }
      
          const user = msg.mentions.users.first();
          if (!user) {
            msg.reply("Mention a user to kick!");
          }
      
          const member = msg.guild.member(user);
          if (member) {
            member.kick(`Member was kicked from the server`).then(() => {
              msg.reply(`User was kicked from the server`);
            });
          }
    }
}