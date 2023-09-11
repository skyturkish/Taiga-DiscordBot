const { SlashCommandBuilder } = require('discord.js')

const { getSettings } = require('../../constant/settings')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('settings')
        .setDescription('View and adjust your personal settings.'),
    async execute(interaction) {
        const settings = getSettings()
        await interaction.reply(settings)
    },
}
