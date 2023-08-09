const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = {
  name: '가위바위보',

  async run(msg, args) {
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

    const response = await msg.reply({
      content: `🕹️ 버튼을 클릭하세요!`,
      components: [row],
    });

    const collectorFilter = i => i.user.id === interaction.user.id;

    // try {
    //   const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });
    //   console.log('기다리는중')
    //   console.log(confirmation)

    //   if (confirmation.customId === 'Rock') {
    //     await confirmation.update({ content: `주먹을 냈다.`, components: [] });

    //   } else if (confirmation.customId === 'Paper') {
    //     await confirmation.update({ content: '보를 냈다.', components: [] });

    //   } else if (confirmation.customId === 'Scissors') {
    //     await confirmation.update({ content: '가위를 냈다.', components: [] });
    //   }

    // } catch (e) {
    //   await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
    // }
  },

};

