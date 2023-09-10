const { Events } = require('discord.js')

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return

        // 11 is the type of the thread channel. source = https://discord-api-types.dev/api/next/discord-api-types-v10/enum/ChannelType
        if (message.channel.type === 11) {
            console.log('threde atıldı')
            const splitedName = message.channel.name.split(' ')

            const threadCreatedUserId = splitedName[splitedName.length - 1]

            if (threadCreatedUserId !== message.author.id) {
                console.log('aynı değil')
                message.delete()
            } else {
                message.channel.send(
                    `bu threade sadece sen(${message.author}) yazabilirsin, burası senin threadin ${message.channel.id} ve şimdi şu yazına karşılık olarak bu thredde yazıyorum "${message.content}"`
                )
            }
        }

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
