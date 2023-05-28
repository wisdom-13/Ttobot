const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('소지금')
    .setDescription('현재 소지중인 금액을 확인할 수 있습니다.'),
  async execute(interaction) {
    await interaction.reply(``);
  },
};