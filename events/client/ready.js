const { prefix } = require('../../configs/config.json');
module.exports = async client => {
    console.log(`${client.user.username} is available now!`)
    let totalUsers = client.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    var activities = [ `${client.guilds.cache.size} servers`, `${totalUsers} users!`,  ], i = 0;
    setInterval(() => client.user.setActivity(`p!help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),5000)
    
};
