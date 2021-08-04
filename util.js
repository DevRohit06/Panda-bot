const request = require('request-promise-native');
const {
    chat
} = require('./configs/config.json');
const { Database } = require("quickmongo")
const db = new Database(process.env.database)

const handleTalk = async (msg) => {
    try {
        msg.content = msg.content.replace(/^<@!?[0-9]{1,20}> ?/i, '');
        if (msg.content.length < 2) return;
        msg.channel.startTyping(true);

        const options = {
            method: 'GET',
            url: chat.url,
            qs: {
                bid: chat.bid,
                key: chat.key,
                uid: chat.uid,
                msg: msg.content
            },
            json: true
        };
         let channel = await db.get(`chatbot_${msg.guild.id}`);
     if(!channel) return;
        var sChannel = msg.guild.channels.cache.get(channel);
        let reply = await request(options);
        msg.channel.stopTyping(true);
        if (reply) {
            msg.lineReplyNoMention(reply.cnt);
        }
    } catch (e) {
      msg.channel.stopTyping(true);
        console.log(e);
    }
};

module.exports = {
    handleTalk
};