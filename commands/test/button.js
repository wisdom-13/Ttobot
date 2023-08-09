const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
  name: '버튼',
  run: (msg, args) => {

    const primary = new ButtonBuilder()
      .setCustomId('Primary')
      .setLabel('Primary')
      .setStyle(ButtonStyle.Primary);

    const secondary = new ButtonBuilder()
      .setCustomId('Secondary')
      .setLabel('Secondary')
      .setStyle(ButtonStyle.Secondary);

    const success = new ButtonBuilder()
      .setCustomId('Success')
      .setLabel('Success')
      .setStyle(ButtonStyle.Success);

    const danger = new ButtonBuilder()
      .setCustomId('Danger')
      .setLabel('Danger')
      .setStyle(ButtonStyle.Danger);

    const link = new ButtonBuilder()
      .setLabel('Link')
      .setURL('https://discord.js.org')
      .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder()
      .addComponents(primary, secondary, success, danger, link);

    msg.reply({
      content: `🕹️ 버튼을 클릭하세요!`,
      components: [row],
    });

  }
};