const Discord = require(`discord.js-selfbot`);

const client = new Discord.Client();

const cc = require(`node-console-colors`);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

const Logger = require(`./Handler/Logger.js`);

const fs = require(`fs`);

const figlet = require(`figlet`);

const config = require(`./Data/config.json`);

const appconfig = require(`./Data/app.js`);


     // listen for the "keypress" event
     process.stdin.on('keypress', (str, key) => 
     {
         if (key.name == 'q') 
         {
          rl.question('Message to send:', (answer) => 
            {
              try
              {
                client.channels.cache.get(config.channel).send(answer);
              }
              catch (ex)
              {

              }
            });
         }
     });

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

console.log("");
console.log("SelfCord attemtping to login");

client.on('ready', () => 
{ 
    console.clear();
    figlet('Self Cord', function(err, data) 
    {
      console.log("Q: Send message");
      if (err) 
      {
          console.dir(err);
          return;
      }
      console.log(data);
  });
});

client.on('message', (message) => 
{
  if (message.author.bot) 
  {
    return;
  }

  if (message.content.startsWith(config.prefix)) 
  {
    const args = message.content.slice(config.prefix.length).split(/ +/)
    const commandName = args.shift().toLowerCase()
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if (command) 
    {
        client.commands.get(command.name).execute(message, args, client);
    }
  }

  else
  {
    try
    {
      if (appconfig.showmsg = true)
      {
        if (message.guild.id == config.server)
        {
          if (message.attachments.size)
          {
            console.log(cc.set(config.nameColor, `${message.author.tag }`) + (cc.set(config.messageColor, ` ${message.attachments.first().url}`)));
            console.log(""); //space out for future messages
          }

          else
          {
            console.log(cc.set(config.messageColor, `[${message.channel.name}]`) + cc.set(config.nameColor, ` ${message.author.tag }`) + (cc.set(config.messageColor, ` ${message}`)));
            console.log(""); //space out for future messages
          }
        }
      }
    }
    catch (ex)
    {
      console.log(`There was an error showing messages. Error: ${ex}`);
    }
  }
})

client.login(config.token);