const Discord = require('discord.js-selfbot')

const config = require("../Data/config.json");

module.exports =
 {
    name: 'eval',
    description: 'Evaluate Javascript code',
    execute(message, args, client) 
    {
        try
        {
            var msg = message.content.split(" ").slice(1).join(" ");

            let evaled = eval(msg);

            switch (evaled)
            {
                case undefined:
                    switch (true)
                    {
                        case msg.includes("console.log"):
                            var msgtmp = msg.split('"');
                            message.channel.send(`Code: ${msg}`);
                            message.channel.send(`Result: ${msgtmp[1]}`);
                        break;

                            case msg.includes("function"):
                                message.channel.send(`Code: ${msg}`);
                                message.channel.send("Cannot evaluate functions")
                        break;
                    }
            }

            message.channel.send(`Code: ${msg}`);
            message.channel.send(`Result: ${evaled}`);
        }

        catch (ex)
        {
            let extmp = ex.toString();


            message.channel.send("SelfCord message:");
            
            switch (true)
            {
                case extmp.includes("SyntaxError: Unexpected end of input"):
                    message.channel.send(`A function or a loop is not finished`);
                break;

                case extmp.includes("is not defined"):
                    message.channel.send(`A reference to a function, variable, or object is made but is not defined`);
                break;

                default:
                    message.channel.send(`Exception: ${ex}`);
                break;
            }
        }
    }
}