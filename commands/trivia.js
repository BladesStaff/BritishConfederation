const Discord = require('discord.js')

let questions = [
    {
        title: "Who is the hottest bot dev?",
        category: "common knowledge",
        options: ["Coolcat5890", "Daisho_Blade", "Mista", "Mckboi"],
        correct: 1
    },
    {
        title: "What is the most populous city in the world?",
        category: "common knowledge",
        options: ["Shanghai", "New York City", "Tokyo", "Casablanca"],
        correct: 3
    },
    {
        title: "What was/is the deadliest disease known to the world?",
        category: "history",
        options: ["COVID19", "Malaria", "Spanish Flu", "Smallpox"],
        correct: 4
    },
    {
        title: "The first Irish settlers were the Picts",
        category: "History",
        options: ["True", "False"],
        correct: 2
    },
    {
        title: "What is the least developed nation according to the HDI",
        category: "general knowledge",
        options: ["Mexico", "Veracruz", "Niger", "Australia"],
        correct: 3
    },
    {
        title: "Who won the first World Cup?",
        category: "sports",
        options: ["Brazil", "Uruguay", "Colombia", "Morocco"],
        correct: 2
    },
    {
        title: "When was the first computing machine made? | Hint, it was made around a major war era",
        category: "Technology",
        options: ['1833', '1872', '1966', '1939'],
        correct: 4
    },
    {
        title: "Italy has 2 nations landlocked inside it. Name the one that IS NOT one of them",
        category: "Geography",
        options: ["San Marino", "Vatican City", "Andorra"],
        correct: 3
    }
    
]

module.exports = {
    name: "trivia",
    description: "testing your knowledge since legit 5 seconds ago!",
    execute:async(msg, bot, args)=>{
        let q = questions[Math.floor(Math.random() * (questions.length))]
        let i = 0
        let category = q.category
        console.log(q)
        const questionEmbed = new Discord.MessageEmbed()
            .setTitle(q.title)
            .setColor("RANDOM")
            .addField('Category', category)
            .setDescription(q.options.map(opt =>{
                i++;
                return `${i} - ${opt}`
            }))
            .setFooter("Respond to this message to gain points!")
            msg.channel.send(questionEmbed)
        try{
            let msgs = await msg.channel.awaitMessages(u2=>u2.author.id === msg.author.id, {time: 7000, max: 1, errors: ["time"]})
            if(parseInt(msgs.first().content) == q.correct){
                return msg.channel.send("You got it right homie! GG :) ✅")
            } else {
                msg.channel.send("F in chat, you got it wrong dawg :( ❌")
            }
        }catch(e){
            return msg.channel.send("You ran out of time :(")
        }
    }
}