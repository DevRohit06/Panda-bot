const client = require('nekos.life');

const neko = new client();


module.exports = {
  config: {
    name: "fact",
    category: "fun",
    aliases:["ft"],
  description: "Sends a cool fact",
  usage: ".fact"
  },
  run: async (client, message, args) => {
  //command

    async function work() {

        let owo = (await neko.sfw.fact());

        message.channel.send(owo.fact).catch(error => {
            console.error(error);
        });
message.delete();
      }

      work();
  }
  };