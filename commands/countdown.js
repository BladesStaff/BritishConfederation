const ms = require('ms')

module.exports = {
    name: "countdown",
    description: "starts countdown",
    execute(msg, args) {
        let Timer = args[0];

        if (!args[0]) {
            return msg.channel.send("Usage: !timer + duration + s|m|h");
        }

        if (args[0] <= 0) {
            return msg.channel.send("Usage: !timer + duration + s|m|h");
        }

        msg.channel.send("**Timer set for:** " + ms(ms(Timer), { long: true }));
        setTimeout(function () {
            msg.reply(`**Timer finished:** ${ms(ms(Timer), { long: true })}`);
        }, ms(Timer));
    }
}