const { MessageEmbed } = require('discord.js');

module.exports = {
  config: {
	name: 'coinflip',
	category: 'fun',
	description: 'Flip a coin and see what you get. Heads or Tails?',
	aliases: ['cf', 'coinf'],
	usage: 'coinflip'
  },
	run: async (client, message, args) => {
		const responses = ['Heads', 'Tails'];
		const response =
		responses[Math.floor(Math.random() * responses.length)];
		message.channel.send(' Flipping...').then((msg) => {
			const Embed = new MessageEmbed()
				.setTitle('You filpped a . .')
				.setColor('BLUE')
				.setDescription(
					`${response}!`,
				);
			msg.edit(Embed);
		});
	}
}