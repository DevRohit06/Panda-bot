    const { MessageEmbed } = require("discord.js");
    const { readdirSync } = require("fs");
    const { stripIndents } = require("common-tags");
    const { embedcolor } = require("../../configs/config.json");
    const { prefix } = require('../../configs/config.json');
const disbut = require('discord-buttons')
const { MessageButton } = require('discord-buttons');
    module.exports = {
        config: {
            name: "help",
            aliases: ["h"],
            usage: "[command name] (optional)",
            category: "info",
            description: "Displays all commands that the karma has.",
            accessableby: "everyone"
        },
        run: async (client, message, args) => {

            const embed = new MessageEmbed()
                .setColor(embedcolor)
                .setAuthor(`${message.guild.me.displayName}`, message.guild.iconURL())
                .setThumbnail(client.user.displayAvatarURL())

            if (!args[0]) {

                embed.setDescription(`**Panda's Prefix Is \`${prefix}\`\n\nFor Help Related To A Particular Command Type -\n\`${prefix}help [command name] Or ${prefix}help [alias]\`**`)
                embed.setFooter(`${message.guild.me.displayName} | Total Commands - ${client.commands.size - 1} Loaded`, client.user.displayAvatarURL());
                embed.addField(` Info [4] - `, '`help`, `info`, `invite`, `uptime`')
                embed.addField(`Fun [11]- `, '`8ball`, `advice`, `clapify`, `coinflip`, `compliment`, `emojify`, `fact`, `iq`, `joke`, `meme`, `roast`')
              embed.addField(`Chatbot [3] - `, '`chatbot`, `disableChatbotchannel`, `setChatbotchannel`')
              embed.addField(`Misc [1] -`, '`feedback` ')
                  .setTimestamp()
               let btn = new disbut.MessageButton()
  .setStyle('url') //default: blurple
  .setLabel('Invite Now!') //default: NO_LABEL_PROVIDED
   //note: if you use the style "url" you must provide url using .setURL('https://example.com')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=766659797051244584&permissions=8&scope=bot')
      let btn2 = new disbut.MessageButton()
  .setStyle('url') //default: blurple
  .setLabel('Vote Now!') //default: NO_LABEL_PROVIDED
   //note: if you use the style "url" you must provide url using .setURL('https://example.com')
  .setURL('https://top.gg/bot/766659797051244584/vote')
 //disables the button | default: false
    
    

    

    message.channel.send({ buttons: [btn, btn2] , embed: embed })
    
            } else {
                let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
                if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
                command = command.config

                embed.setDescription(stripIndents`**Panda Bot\'s prefix is \`${prefix}\`**\n
                ** Command -** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n
                ** Description -** ${command.description || "No Description provided."}\n
                ** Usage -** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}\n
                ** Needed Permissions -** ${command.accessableby || "everyone can use this command!"}\n
                ** Aliases -** ${command.aliases ? command.aliases.join(", ") : "None."}`)
                embed.setFooter(message.guild.name, message.guild.iconURL())

                return message.channel.send(embed)
            }
        }
    };
