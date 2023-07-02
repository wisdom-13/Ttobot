const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hi')
    .setDescription(`Let's say hello to Ttobot`),
  async execute(interaction) {
    await interaction.reply(`Hi! i'm ttobot😄`);
  },
};