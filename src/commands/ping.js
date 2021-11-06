const { MessageEmbed } = require('discord.js');

module.exports = {
    data: {
        name: 'ping',
        description: 'Returns the bot\'s response time.',
    },
    async execute(interaction, client) {
        const msg = await interaction.deferReply({ fetchReply: true });

        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`Bot Ping: **${msg.createdTimestamp - interaction.createdTimestamp}** ms\nAPI Ping: **${client.ws.ping}** ms`);

        return await interaction.editReply({ embeds: [embed] });
    },
};
