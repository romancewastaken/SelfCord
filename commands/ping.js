const Discord = require('discord.js-selfbot')

const config = require("../Data/config.json");

module.exports =
 {
    name: 'ping',
    description: 'Display bot latency',
    execute(message, args, client) 
    {
        try
        {
            message.channel.send('Getting ping...').then(msg => 
                {
                const start = message.createdTimestamp;
                const end = msg.createdTimestamp;
                const total = end - start;


                msg.edit("SelfCord Ping:")
                message.channel.send(`API: ${client.ws.ping} ms`);
                message.channel.send(`Ping: ${total} ms`);
            });
        }
        catch (ex)
        {
            message.channel.send("SelfCord message:");
            message.channel.send(`Exception: ${ex}`);
        }
    }
}