const { MessageEmbed } = require("discord.js");
const answers = require('../../assets/json/8ball.json');

module.exports = {
  config: {
    name: "8ball",
    aliases:["8b"],
    description: "Ask the mighty 8Ball!",
    category: "fun"
  },
  run: async (bot, message, args) => {
        const question = args.join(" ");

        if (!question) return message.channel.send("Please provide a valid question");

        const answer = answers[Math.floor(Math.random() * answers.length)];

        const embed = new MessageEmbed()
            .setTitle("8Ball Says")
            .addField("Question:", question)
            .addField("Answer:", answer)
            .setColor("BLUE")
            .setFooter(message.author.username)
            .setTimestamp();

        message.channel.send(embed);
    }
};