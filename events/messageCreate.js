const { Events } = require('discord.js')

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return

        if (message.mentions.users.has('1149799424000794655')) {
            const actualContent = message.content
                .replace(/<@[^>]*>/g, '')
                .trim()

            if (actualContent.length < 4) {
                message.channel.send('Please write more than 4 characters')
            } else {
                const threadName = actualContent.substring(0, 100)

                const threadOptions = {
                    name: threadName,
                    autoArchiveDuration: 60,
                }

                const thread = await message.startThread(threadOptions)

                thread.send(
                    `This message is sent by Taiga for ${message.author.username} and it is created as a response to : ${actualContent}`
                )
            }
        }
        // 11 is the type of the thread channel. source = https://discord-api-types.dev/api/next/discord-api-types-v10/enum/ChannelType
        if (
            message.channel.type === 11 &&
            message.channel.ownerId === '1149799424000794655'
        ) {
            message.channel.send(
                `bu threade sadece sen(${message.author}) yazabilirsin, burası senin threadin ${message.channel.id} ve şimdi şu yazına karşılık olarak bu thredde yazıyorum "${message.content}"`
            )
        }
    },
}
