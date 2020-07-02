const Discord = require('discord.js')
const weather1 = require("weather-js");

module.exports = {
    name: "weather",
    description: "returns weather of a location",
    execute(msg, args){
        weather1.find({ search: args.join(" "), degreeType: "C" }, function (
            err,
            result
          ) {
            if (err) msg.channel.send(err);
      
            if (result.length === 0) {
              msg.channel.send("**Please enter a valid location.**");
              return;
            }
      
            var current = result[0].current;
            var location = result[0].location;
      
            const embed = new Discord.MessageEmbed()
              .setDescription(`**${current.skytext}**`)
              .setAuthor(`Weather for ${current.observationpoint}`)
              .setThumbnail(current.imageUrl)
              .addField("Timezone", `UTC${location.timezone}`, true)
              .addField("Degree Type", location.degreetype, true)
              .addField("Temperature", `${current.temperature} Degrees`, true)
              .addField("Feels Like", `${current.feelslike} Degrees`, true)
              .addField("Winds", current.winddisplay, true)
              .addField("Humidity", `${current.humidity}%`, true);
      
            msg.channel.send({ embed });
          });
    }
}