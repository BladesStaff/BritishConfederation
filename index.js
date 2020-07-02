const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!";
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");

bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity("Taking over the Middle East", {type: "STREAMING", url: "https://www.youtube.com/watch?v=EEIk7gwjgIM"});
});

bot.on("message", function(message) {
  const parts = message.content.split(" ");

  if (parts[0] === "!image") {
    image(message, parts);
  }
});

function image(message, parts) {
  const search = parts.slice(1).join(" ");

  const options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + search,
    method: "GET",
    headers: {
      Accept: "text/html",
      "User-Agent": "Chrome"
    }
  };
  request(options, function(error, response, responseBody) {
    if (error) {
      message.reply(
        "We could not find that image. Please make sure you spelt it correctly and try again!"
      );
      return;
    }

    $ = cheerio.load(responseBody);

    const links = $(".image a.link");

    const urls = new Array(links.length)
      .fill(0)
      .map((v, i) => links.eq(i).attr("href"));
    console.log(urls);
    if (!urls.length) {
      return;
    }

    message.channel.send(urls[0]);
  });
}

bot.on("message", async msg => {
  if (msg.content === "!joke") {
    let getJoke = async () => {
      let response = await axios.get(
        "http://www.official-joke-api.appspot.com/random_joke"
      );
      let joke = response.data;
      return joke;
    };
    let jokeValue = await getJoke();
    console.log(jokeValue);
    msg.channel.send(
      `Here's a good one \n ${jokeValue.setup} \n\n ${jokeValue.punchline}`
    );
  }
});

bot.on("message", async msg => {
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  console.log(args);

  if (command === "help") {
    bot.commands.get("help").execute(msg, args, bot);
  }

  if (command === "kick") {
    bot.commands.get("kick").execute(msg, args);
  }

  if (command === "exile") {
    bot.commands.get("exile").execute(msg, args);
  }

  if (command === "say") {
    bot.commands.get("say").execute(msg, args);
  }

  if (command === "embed") {
    bot.commands.get("embed").execute(msg, args);
  }

  if (command === "announce") {
    bot.commands.get("announce").execute(msg, args, bot);
  }

  if (command === "clear") {
    bot.commands.get("clear").execute(msg, args);
  }

  if (command === "translate") {
    bot.commands.get("translate").execute(msg, args);
  }

  if (command === "rps") {
    bot.commands.get("rps").execute(msg, args);
  }

  if (command === "8ball") {
    bot.commands.get("8ball").execute(msg, args);
  }

  if (command === "roll") {
    bot.commands.get("roll").execute(msg, args);
  }

  if (command === "flip") {
    bot.commands.get("flip").execute(msg, args);
  }

  if (command === "weather") {
    bot.commands.get("weather").execute(msg, args);
  }

  if (command === "calc") {
    bot.commands.get("calc").execute(msg, args);
  }

  if (command === "countdown") {
    bot.commands.get("countdown").execute(msg, args);
  }

  if (command === "status") {
    bot.commands.get("status").execute(msg, args);
  }

  if (command === "vote") {
    bot.commands.get("vote").execute(msg, args);
  }

  if (command === "onionhat") {
    bot.commands.get("onionhat").execute(msg, args);
  }

  if (command === "trivia") {
    bot.commands.get("trivia").execute(msg, args);
  }

  if (command === "points") {
    bot.commands.get("points").execute(msg, args);
  }

  if (command === "ping") {
    bot.commands.get("ping").execute(msg, args, bot);
  }

  if (command === "eradicate") {
    bot.commands.get("eradicate").execute(msg, args);
  }
});

bot.login(process.env.token);
