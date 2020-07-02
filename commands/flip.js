

module.exports = {
    name: "flip",
    description: "flips a coin",
    execute(msg, args) {
        const coinflip = Math.floor(Math.random() * 2);
        if (coinflip === 1) {
            msg.channel.send("You got **HEADS!**");
            console.log("heads");
        } else {
            msg.channel.send("You got **TAILS!**");
            console.log("tails");
        }
    }
}