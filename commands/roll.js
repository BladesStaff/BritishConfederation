

module.exports = {
    name: "roll",
    description: "rolls six-sided die",
    execute(msg, args) {
        const dieroll = Math.floor(Math.random() * 7);
        if (dieroll === 0) {
            msg.channel.send("The die landed on **ONE**");
        }
        if (dieroll === 1) {
            msg.channel.send("The die landed on **ONE**");
        }
        if (dieroll === 2) {
            msg.channel.send("The die landed on **TWO**");
        }
        if (dieroll === 3) {
            msg.channel.send("The die landed on **THREE**");
        }
        if (dieroll === 4) {
            msg.channel.send("The die landed on **FOUR**");
        }
        if (dieroll === 5) {
            msg.channel.send("The die landed on **FIVE**");
        }
        if (dieroll === 6) {
            msg.channel.send("The die landed on **SIX**");
        }
        if (dieroll === 7) {
            msg.channel.send("The die landed on **SIX**");
        }
        console.log(`The die landed on ${dieroll}`)
    }

}