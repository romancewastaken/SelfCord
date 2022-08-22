const Discord = require('discord.js-selfbot');

const fs = require('fs');

const config = require("../Data/config.json");

module.exports =
 {
    name: 'changenick',
    description: 'Change your nick in current server',
    execute(message, args, client) 
    {
        let nick = message.content.split(" ");
        nick.shift();
        nick = nick.join(" ");

        try
        {
            message.member.setNickname(nick);
            message.channel.send("SelfCord message:");
            message.channel.send(`Changed nickname to: ${nick}`);
        }
        catch (ex)
        {
            message.channel.send("SelfCord message:");
            message.channel.send(`Exception: ${ex}`);
        }
    }
}