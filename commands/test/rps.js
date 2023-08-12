const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = {
  name: '가위바위보',

  async run(msg) {
    console.log(msg.author)
    const Rock = new ButtonBuilder()
      .setCustomId('Rock')
      .setLabel('바위')
      .setStyle(ButtonStyle.Primary);

    const Paper = new ButtonBuilder()
      .setCustomId('Paper')
      .setLabel('보')
      .setStyle(ButtonStyle.Secondary);

    const Scissors = new ButtonBuilder()
      .setCustomId('Scissors')
      .setLabel('가위')
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder()
      .addComponents(Scissors, Rock, Paper);

    msg.reply({
      content: `🕹️ 버튼을 클릭하세요!`,
      components: [row],
    });

  },

};

