const { Events } = require('discord.js')

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return

        if (message.channel.name === 'taiga') {
            console.log('sent message to taiga')
            const threadOptions = {
                name:
                    message.content.substring(0, 50) +
                    ' asked by ' +
                    message.author.id,
                autoArchiveDuration: 60,
            }

            const thread = await message.startThread(threadOptions)

            thread.send(
                `This message is sent by ${message.author.username} and it is created as a response to : ${message.content}`
            )
        }
    },
}
