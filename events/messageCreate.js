const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(msg) {

    const prefix = '!';

    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    if (msg.content.slice(0, prefix.length) !== prefix) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = msg.client.commands.get(command);
    //get는 컬렉션 내에 해당 key 값을 가진 데이터가 없으면 false 값을 반환하므로 부분적으로 Collection#has처럼 사용할수 있습니다.

    if (cmd) cmd.run(msg, args);
  }
};