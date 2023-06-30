const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('버튼')
    .setDescription('버튼을 클릭하세요.'),

  async execute(interaction) {

    const confirm = new ButtonBuilder()
      .setCustomId('confirm')
      .setLabel('Confirm Ban')
      .setStyle(ButtonStyle.Danger);

    const cancel = new ButtonBuilder()
      .setCustomId('cancel')
      .setLabel('Cancel')
      .setStyle(ButtonStyle.Secondary);

    const row = new ActionRowBuilder()
      .addComponents(cancel, confirm);

    return interaction.reply({ content: `버트으은`, components: [row] });


  },
};