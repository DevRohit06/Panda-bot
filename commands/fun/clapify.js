module.exports = {
  config: {
  name: "clapify",
  category: "fun",
  description: "Generate clapified 👏 text 👏",
  aliases: ["clify"],
  usage: "clapify <text>"
  },
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        ":x: Please provide valid text."
      );
    }

    let text;
    const txt = args.join(" ");
    if (/\s/.test(txt)) {
      text = args.join(" 👏 ");
    } else {
      text = args
        .join(" ")
        .split("")
        .join(" 👏 ");
    }
    message.channel.send(`${text} 👏`);
  }
};