const Discord = require('discord.js-selfbot');

const config = require("../Data/config.json");

module.exports =
 {
    name: 'channel',
    description: 'Change channel message sender id',
    execute(message, args, client) 
    {
      try
      {
        let id = message.content.split(" ");
        id.shift();
        id = id.join(" ")
        config.channel = id;

        message.channel.send("SelfCord message:");
        message.channel.send(`Set channel sender to ${id} successfully`);
      }
      catch (ex)
      {
        message.channel.send("SelfCord message:");
        message.channel.send(`Unsuccessfully set channel sender. Exception: ${ex}`);
      }
    }
}
