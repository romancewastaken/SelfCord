const Discord = require('discord.js-selfbot');

const config = require("../Data/config.json");

module.exports =
 {
    name: 'dm',
    description: 'Send a dm to a user by mentioning them',
    execute(message, args, client) 
    {
        var debugg = false;

        try
        {
            if (debugg)
            {
                return;
            }
            
            else
            {
                let id = message.content.split(" ");
                id.shift();
                id = id.join(" ");

                let msg = message.content.split("  ");
                msg.shift();
                msg = msg.join("  ")

                client.users.fetch(id, false).then((user) => 
                {
                    user.send(msg);
                })
            }
        }
        catch (ex)
        {
            message.channel.send("SelfCord Message:");
            message.channel.send(`Exception: ${ex}`);
        }
    }
}