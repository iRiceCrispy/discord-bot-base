require('dotenv').config();
const { Client, Collection, Intents } = require('discord.js');
const eventHandler = require('./handlers/eventHandler.js');
const commandHandler = require('./handlers/commandHandler.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

// If command data is needed for manually adding slash commands to guilds.
// client.commandData = [];

eventHandler(client);
commandHandler(client);

client.login(process.env.BOT_TOKEN);
