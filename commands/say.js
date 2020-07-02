

module.exports = {
    name: "say",
    description: "returns input as bot saying it",
    execute(msg, args) {
        if (!msg.member.hasPermission("MANAGE_MESSAGES"))
            return msg.channel.send("Nah fam go away");
        let botmessage = args.join(" ");
        msg.delete().catch();
        msg.channel.send(botmessage)
    }
}
