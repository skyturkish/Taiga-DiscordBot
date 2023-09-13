const { SlashCommandBuilder, TextChannel } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription('Ask Taiga a question')
        .addStringOption((option) =>
            option
                .setName('question')
                .setDescription('your question')
                .setRequired(true)
        ),
    async execute(interaction) {
        const question = interaction.options.get('question').value

        if (question.length < 4) {
            interaction.reply({
                content:
                    'Please write a question more than 4 characters to get help from me',
                ephemeral: true,
            })
        } else {
            const channel = interaction.channel

            if (channel instanceof TextChannel) {
                const thread = await channel.threads.create({
                    name: question,
                    autoArchiveDuration: 60,
                    reason: 'Needed a separate thread for food',
                })

                thread.send(
                    `This message is sent by Taiga for ${interaction.user.username} and it is created as a response to : ${question}`
                )
                interaction.reply({
                    content: `You will get answer for this question: ${question}`,
                    ephemeral: true,
                })
            } else {
                interaction.reply(
                    `This message is sent by Taiga for ${interaction.user.username} and it is created as a response to : ${question}`
                )
            }
        }
    },
}
