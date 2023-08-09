const { Events } = require('discord.js');
const { randomProperty } = require('../function');

module.exports = {
  name: Events.InteractionCreate,

  async execute(interaction) {
    if (!interaction.isButton()) return;

    // 가위바위보 버튼 (rps)
    if (['Rock', 'Paper', 'Scissors'].includes(interaction.customId)) {
      const rps = { Rock: '주먹', Paper: '보', Scissors: '가위' };
      const msg = `${rps[interaction.customId]}를 냈다! 랜덤 : ${randomProperty(rps)}`
      await interaction.update({ content: msg, components: [] });
    }

  },
};