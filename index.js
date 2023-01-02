require("dotenv").config();

const TOKEN = process.env.TOKEN; // get TOKEN from .env file
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers
  ]
});

console.log("Logged in as "+client.user.tag)

client.login(TOKEN);
