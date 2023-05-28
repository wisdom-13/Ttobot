const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('buy')
    .setDescription('물건을 구매하세요.')
    .addStringOption(option =>
      option.setName('item')
        .setDescription('The input to echo back')),

  async execute(interaction) {
    await interaction.reply(``);
  },
};