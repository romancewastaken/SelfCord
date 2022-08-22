const Discord = require('discord.js-selfbot');

const fs = require('fs');

const config = require("../Data/config.json");

module.exports =
 {
    name: 'profilepicture',
    description: 'Change your profile picture to a file locally',
    execute(message, args, client) 
    {
        let file = message.content.split(" ");
        file.shift();
        file = file.join(" ");

        try
        {
            if (fileExists(file))
            {
                client.user.setAvatar(file);
                message.channel.send("SelfCord message:");
                message.channel.send("Changed profile picture.");
            }

            else if (!fileExists(file))
            {
                message.channel.send("SelfCord message:");
                message.channel.send(`${file} not found on drive`);
            }
        }
        catch (ex)
        {
            message.channel.send("SelfCord message:");
            message.channel.send(`Exception: ${ex}`);
        }
    }
}

function fileExists(path)
{
    if (fs.existsSync(path))
    {
        return true;
    }

    else if (!fs.existsSync(path))
    {
        return false;
    }
}