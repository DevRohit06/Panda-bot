const Discord = require('discord.js');
const config = require('../../configs/config.json');
const disbut = require('discord-buttons')
const { MessageButton } = require('discord-buttons');

module.exports = {
    config: {
        name: 'invite',
        description: 'Link to invite me',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
    .setDescription(
      "**Panda Bot** \n\n**👋 Hey!\n Do you want Invite me? [Click Here](https://discord.com/api/oauth2/authorize?client_id=766659797051244584&permissions=8&scope=bot) to Invite me!\nThanks for supporting me.** ❤️")
    .setTimestamp()
        .setColor(config.embedcolor);
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
    }
}

