const { Client, Collection, Events, Formatters, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    const prefix = '!';

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.slice(0, prefix.length) !== prefix) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command);
    //get는 컬렉션 내에 해당 key 값을 가진 데이터가 없으면 false 값을 반환하므로 부분적으로 Collection#has처럼 사용할수 있습니다.

    if (cmd) cmd.run(client, message, args);
  }
};