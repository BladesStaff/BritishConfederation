

module.exports = {
    name: "rps",
    description: "plays rock-paper-scissors with the bot",
    execute(msg, args) {
        let replies = ["rock", "paper", "scissors"];
        let result = Math.floor(Math.random() * replies.length);

        let uReply = args[0];
        if (!uReply) {
            return msg.channel.send(
                `Please enter one of these responses: \`${replies.join(" ")}\``
            );
        }
        if (!replies.includes(uReply)) {
            msg.channel.send(
                `Only these replies are valid: \`${replies.join(" ")}\``
            );
        }
        if (replies[result] === uReply) {
            return msg.channel.send("We tied! Let's go again!");
        } else if (uReply === "rock") {
            if (replies[result] === "paper") {
                msg.channel.send("I won! I had paper! Let's go again!");
            } else return msg.channel.send("You won!");
        } else if (uReply === "scissors") {
            if (replies[result] === "rock") {
                msg.channel.send("I won! I had rock! Let's play again!");
            } else return msg.channel.send("You won!");
        } else if (uReply === "paper") {
            if (replies[result] === "scissors") {
                msg.channel.send("I won! I had scissors! Let's go again!");
            } else return msg.channel.send("You won!");
        }
    }
}