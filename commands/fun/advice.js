const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")

module.exports = {
    config: {
        name: 'advice',
        group: "fun",
        description: 'Gives an Advice',
        aliases: ["Advice"],
        usage: '',
        accessableby: "",
    },

run: async (client, message, args) => {
    try {
        		const { body } = await snekfetch.get('http://api.adviceslip.com/advice');
        		message.channel.send(JSON.parse(body.toString()).slip.advice);
        	} catch (err) {
        		message.channel.send(`An error occurred: \`${err.message}\`. Try again later!`);
        	}
}
}
    