const math = require('mathjs')
const Discord = require('discord.js')

module.exports = {
    name: "calc",
    description: "calculates an equation",
    execute(msg, args){
        if (!args[0]) return msg.channel.send("Please enter an equation");

    let resp;
    try {
      resp = math.evaluate(args.join(" "));
    } catch (e) {
      return msg.channel.send("Please enter a **valid** equation");
    }

    const embed = new Discord.MessageEmbed()
      .setColor(0xffcc00)
      .setTitle("Calculation")
      .addField("Input", `\`\`\`${args.join(" ")}\`\`\``)
      .addField("Output", `\`\`\`${resp}\`\`\``);

    console.log(`EQUATION ${args.join(" ")} \n RESPONSE ${resp}`);
    msg.channel.send(embed);
    }
}