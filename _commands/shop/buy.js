const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('구매')
    .setDescription('구매할 물건과 수량을 입력해주세요.')
    .addStringOption(option => option.setName('상품').setDescription('구매할 물건의 이름을 입력해주세요.').setRequired(true))
    .addIntegerOption(option => option.setName('수량').setDescription('구매할 물건의 수량을 입력해주세요.').setRequired(true)),

  async execute(interaction) {
    const item = interaction.options.getString('상품');
    const num = interaction.options.getInteger('수량');

    return interaction.reply({ content: `${item} ${num}개를 구입하였습니다.` });
  },
};