const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('D6')
    .setDescription('Roll the dice! 🎲'),
  async execute(interaction) {
    await interaction.reply(``);
  },
};