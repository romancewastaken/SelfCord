const Discord = require('discord.js-selfbot');

const isReachable  = require('is-reachable');

const config = require("../Data/config.json");

module.exports =
 {
    name: 'status',
    description: 'Check if a ip/website is alive',
    execute(message, args, client) 
    {
        let ip = message.content.split(" ");
        ip.shift();
        ip = ip.join(" ");

        try
        {
            (async () => 
            {
                var reachable = await isReachable(ip);

                if (reachable)
                {
                    message.channel.send(`${ip}` + " is reachable");
                }
    
                else if (!reachable)
                {
                    message.channel.send(`${ip}` + " is unreachable/or unresponsive");
                }
            })();
        }
        catch (ex)
        {
            message.channel.send("SelfCord message:");
            message.channel.send(`Exception: ${ex}`);
        }
    }
}
