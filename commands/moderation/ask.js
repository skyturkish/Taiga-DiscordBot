const { SlashCommandBuilder, TextChannel } = require('discord.js')
const splitMessage = require('../../functions/splitMessage')

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
                    `**Question:** ${question} \n \n **This message is sent by Taiga for ${interaction.user.username}** `
                )
                interaction.reply({
                    content: `You will get answer for this question: ${question}`,
                    ephemeral: true,
                })
            } else {
                const gelenMesaj = `**Question:** ${question} \n \n **Elbette! Node.js ve JavaScript, farklı kavramları ifade eden iki terimdir. İşte bu iki kavramın farkları:

JavaScript:

- JavaScript, web tarayıcılarında çalışabilen bir programlama dilidir.
- JavaScript, tarayıcı tarafından müşteri tarafında (client-side) çalıştırılır ve web sayfalarına dinamiklik ve etkileşim eklemek için kullanılır.
- JavaScript, tarayıcı ortamında HTML ve CSS ile birlikte kullanılır ve kullanıcı arayüzünü yönlendirme, veri doğrulama ve web sayfalarını canlandırma gibi görevler için kullanılır.

Node.js:
- Node.js, JavaScript dilinin sunucu tarafında (server-side) çalışmasına olanak tanıyan bir çalıştırma ortamıdır.
- Node.js, V8 JavaScript motorunu temel alır ve JavaScript kodunu sunucu tarafında çalıştırabilir, veritabanlarına erişim sağlayabilir, ağ işlemleri yapabilir ve daha birçok sunucu tarafı görevi gerçekleştirebilir.
- Node.js, JavaScript'i sunucu uygulamaları, API'ler ve diğer back-end işlevleri için kullanmanıza olanak tanır.
Özetle, JavaScript, web tarayıcılarında kullanılan bir programlama dilidir ve müşteri tarafı (client-side) işlevler için kullanılırken, Node.js, sunucu tarafında (server-side) çalışabilen bir JavaScript çalıştırma ortamıdır ve sunucu uygulamaları geliştirmek için kullanılır. JavaScript temel dil olup, Node.js, JavaScript'i sunucu tarafında çalıştırmak için kullanılan bir araçtır.**`

                const messages = splitMessage(gelenMesaj)

                for (const msg of messages) {
                    interaction.reply(msg)
                }
            }
        }
    },
}
