const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('aaa')
    .setDescription('Roll the dice!'),
  async execute(interaction) {
    await interaction.reply(`fsf`);
  },
};