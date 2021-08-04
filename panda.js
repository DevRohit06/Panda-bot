// PACKAGES

const Discord = require('discord.js');
const config = require('./configs/config.json');
const fs = require('fs');
const { Database } = require("quickmongo")
const db = new Database(process.env.database)
const http = require("http");
const path = require("path");
const express = require("express");
const chalk = require("chalk");
const moment = require("moment"); 
var Jimp = require("jimp");
const request = require("request");
const axios = require("axios");
const snekfetch = require("snekfetch");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// Handlers And Client

const client = new Discord.Client();
require("discord-inline-reply")
const disbut = require('discord-buttons')(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const { Player } = require('discord-player');
const player = new Player(client);
client.player = player;
client.emotes = require('./configs/emotes.json')
client.filters = require('./configs/filters.json');

["aliases", "commands"].forEach(cmd => client[cmd] = new Discord.Collection());
["console", "command", "event"].forEach(events => require(`./handlers/${events}`)(client));

client.categories = fs.readdirSync('./commands');

fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName}`);
        client.player.on(eventName, event.bind(null, client));
    });
});

// EVENTS

client.on('ready', () => {
    console.log('Karma Started!');
});

db.on("ready", () => {
    console.log("Database Connected!")
})

//CHATBOT FEATURE 
client.util = require('./util');
client.on("message", async (msg) => {
        let channel = await db.get(`chatbot_${msg.guild.id}`);
     if(!channel) return;
        var sChannel = msg.guild.channels.cache.get(channel);
     if (msg.author.bot || sChannel.id !== msg.channel.id) return;
     
        
    if (!msg.content) return sChannel.send("Please say something.");
        client.util.handleTalk(msg);
    
              
    });
client.on("debug", console.log)
client.snipes = new Map();

client.on('messageDelete', function(message, channel){
client.snipes.set(message.channel.id,{
    content:message.content,
    author:message.author.tag,
    authorimg:message.author.avatarURL({dynamic: true}),
    image:message.attachments.first() ? message.attachments.first().proxyURL : null,
    channelname:message.channel.name,
    messageid:message.id,
    channelid:message.channel.id
})
})

client.login(process.env.token)
