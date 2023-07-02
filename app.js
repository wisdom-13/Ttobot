const fs = require('node:fs');
const path = require('node:path');
const { Op } = require('sequelize');
const { Client, Collection, Events, Formatters, GatewayIntentBits, Partials } = require('discord.js');
const { Users, CurrencyShop } = require('./dbObjects.js');
const { token } = require('./config.json');
const prefix = '!';

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});


client.commands = new Collection();

// 명령어 로드
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.name, command);
  }
}
console.log(client.commands.map(c => c.name).join(', ') + ' 명령어가 로드됨.');

// 준비
client.on('ready', () => console.log(`${client.user.tag} 에 로그인됨`));

// 메세지 
client.on('messageCreate', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  if (msg.content.slice(0, prefix.length) !== prefix) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command);
  if (cmd) cmd.run(client, msg, args);
})

client.login(token);