const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: '폼',
  run: (msg) => {

    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('제목')
      .setURL('https://discord.js.org/')
      .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
      .setDescription('설명')
      .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(
        { name: '필드1', value: '필드1의 설명' },
        { name: '\u200B', value: '\u200B' },
        { name: '필드2', value: '필드2의 설명', inline: true },
        { name: '필드3', value: '필드3의 설명', inline: true },
      )
      .addFields({ name: '필드4', value: '필드4의 설명', inline: true })
      .setImage('https://i.imgur.com/AfFp7pu.png')
      .setTimestamp()
      .setFooter({ text: '하단', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    msg.reply({ embeds: [exampleEmbed] });
  }
};
