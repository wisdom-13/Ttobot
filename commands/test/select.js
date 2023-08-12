const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
  name: '선택',
  run: (msg) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId('selecter')
      .setPlaceholder('선택입력란')
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel('선택지1라벨')
          .setDescription('선택지1에 대한 설명')
          .setValue('선택지1'),
        new StringSelectMenuOptionBuilder()
          .setLabel('선택지2라벨')
          .setDescription('선택지2에 대한 설명')
          .setValue('선택지2')
          .setDefault(true),
        new StringSelectMenuOptionBuilder()
          .setLabel('선택지3라벨')
          .setDescription('선택지3에 대한 설명')
          .setValue('선택지3'),
      );

    const row = new ActionRowBuilder()
      .addComponents(select);

    msg.reply({
      content: `🕹️ 선택지를 클릭하세요!`,
      components: [row],
    });

  }
};
