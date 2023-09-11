const {
    ActionRowBuilder,
    ButtonStyle,
    ButtonBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
} = require('discord.js')

const settings = {
    dmAllow: false,
    privateChannelsAllowed: false,
    selectedGPTModel: 'GPT-3.5 (Default affordable)',
}

function getSettings() {
    const dmAllow = new ButtonBuilder()
        .setCustomId('DMs Allowed')
        .setLabel('DMs Allowed')
        .setStyle(
            settings.dmAllow ? ButtonStyle.Success : ButtonStyle.Secondary
        )

    const privateChannelsAllowed = new ButtonBuilder()
        .setCustomId('Private Channels Allowed')
        .setLabel('Private Channels Allowed')
        .setStyle(
            settings.privateChannelsAllowed
                ? ButtonStyle.Success
                : ButtonStyle.Secondary
        )
    const addCredit = new ButtonBuilder()
        .setLabel('Add Credits')
        .setURL('https://asktaiga.ai/')
        .setStyle(ButtonStyle.Link)

    const select = new StringSelectMenuBuilder()
        .setCustomId('GPT Model')
        .setPlaceholder(settings.selectedGPTModel)
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('GPT-3.5 (Default affordable)')
                .setValue('GPT-3.5 (Default affordable)'),
            new StringSelectMenuOptionBuilder()
                .setLabel('GPT-4 (Better accuracy, higher cost)')
                .setValue('GPT-4 (Better accuracy, higher cost)')
        )

    function createCurrentSettings() {
        return `
Feel free to drop us an email **contact@asktaiga.ai** if you have any questions or run into any trouble!
**Adjust your settings here:**
Current: ${settings.selectedGPTModel},
${settings.dmAllow ? ':white_check_mark:' : ':x:'} DMs Allowed
${
    settings.privateChannelsAllowed ? ':white_check_mark:' : ':x:'
} Private Channels Allowed
Available balance: €4.25 (Credits used: €5.75)
`
    }

    let selectGPTModel = new ActionRowBuilder().addComponents(select)
    const buttons = new ActionRowBuilder().addComponents(
        dmAllow,
        privateChannelsAllowed,
        addCredit
    )

    return {
        content: createCurrentSettings(),
        components: [selectGPTModel, buttons],
        ephemeral: true,
    }
}

module.exports = { settings, getSettings }
