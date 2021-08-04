const { MessageEmbed } = require('discord.js');
const { BOT_OWNER } = process.env;

module.exports = {
  config: {
	name: 'iq',
	category: 'fun',
	description: ' ̶ R̶a̶n̶d̶o̶m̶i̶s̶e̶  Calculate your IQ..',
	aliases: [],
	usage: 'iq'
  },
	run: async (client, message, args) => {
		const love = Math.floor(Math.random() * 130) + 1;
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

		if (member.id === BOT_OWNER) {
			return message.channel.send('⚙️ Calculating...').then((msg) => {
				const Embed = new MessageEmbed()
					.setTitle(`🧠 ${member.user.username}'s IQ:`)
					.setColor('BLUE')
					.setDescription(
						'130!',
					);
				msg.edit(Embed);
			});
		}

		message.channel.send('⚙️ Calculating...').then((msg) => {
			const Embed = new MessageEmbed()
				.setTitle(`🧠 ${member.user.username}'s IQ:`)
				.setColor('BLUE')
				.setDescription(
					`${love}!`,
				);
			msg.edit(Embed);
		});
	},
};