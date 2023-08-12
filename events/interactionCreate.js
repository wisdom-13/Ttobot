const { Events } = require('discord.js');
const { randomProperty } = require('../function');

module.exports = {
  name: Events.InteractionCreate,

  async execute(interaction) {

    // 가위바위보 버튼 (rps)
    if (['Rock', 'Paper', 'Scissors'].includes(interaction.customId)) {
      const rps = { Rock: '주먹', Paper: '보', Scissors: '가위' };
      const msg = `${rps[interaction.customId]}를 냈다! 랜덤 : ${randomProperty(rps)}`
      await interaction.update({ content: msg, components: [] });
    }

    // 선택지
    if (interaction.customId == 'selecter') {
      const msg = `${interaction.values}을 선택함`;
      await interaction.reply({ content: msg, components: [] });
    }

  },
};