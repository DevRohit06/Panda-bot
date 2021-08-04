const Discord = require('discord.js');
const config = require('../../configs/config.json');
const moment = require("moment");
require('moment-duration-format')


module.exports = {
    config: {
        name: 'uptime',
        description: 'Shows bot uptime',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (bot, message, args) => {
        const prefix = config.prefix
        if (!message.content.startsWith(prefix)) return;

        let uptime = moment.duration(bot.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

        const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL()
    const botembed = new Discord.MessageEmbed()
        .setTitle("Panda Bot")
        .setColor(config.embedcolor)
        .setDescription(`<:admin:837259196222537750> **Panda has been active for** \`${uptime}\`. \n <:admin:837259196222537750> **The ping is currently** \`${bot.ws.ping} ms`)
        .setTimestamp()
        .setFooter('© Panda bot || ROY#1779 ', 'https://i.imgur.com/VwAT08q.jpg')
        .setThumbnail(bicon);
    message.channel.send(botembed);
    }
}

