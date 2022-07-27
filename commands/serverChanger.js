const Discord = require('discord.js-selfbot')

const config = require("../Data/config.json");

module.exports =
 {
    name: 'server',
    description: 'Change server listener id',
    execute(message, args, client) 
    {
      if (message.author.id == config.ownerID)
      {
          try
          {
            let id = message.content.split(" ");
            id.shift();
            id = id.join(" ")
            config.server = id;
      
            message.channel.send("SelfCord message:");
            message.channel.send(`Set server listener to ${id} successfully`);
          }
          catch (ex)
          {
            message.channel.send("SelfCord message:");
            message.channel.send(`Unsuccessfully set server listener. Exception: ${ex}`);
          }
      }
    }
}
