const { Events } = require('discord.js')
const { getSettings, settings } = require('../constant/settings')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(
                interaction.commandName
            )

            if (!command) {
                console.error(
                    `No command matching ${interaction.commandName} was found.`
                )
                return
            }

            try {
                await command.execute(interaction)
            } catch (error) {
                console.error(`Error executing ${interaction.commandName}`)
                console.error(error)
            }
        } else {
            if (interaction.customId == 'DMs Allowed') {
                settings.dmAllow = !settings.dmAllow
            } else if (interaction.customId == 'Private Channels Allowed') {
                settings.privateChannelsAllowed =
                    !settings.privateChannelsAllowed
            } else if (interaction.customId == 'GPT Model') {
                settings.selectedGPTModel = interaction.values[0]
            }
            const updatedSettings = getSettings()
            interaction.update(updatedSettings)
        }
    },
}
