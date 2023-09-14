const { Events } = require('discord.js')
const splitMessage = require('../functions/splitMessage')

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return

        const shortQuestionInfo = `${message.author} Please write a question more than 4 characters to get help from me`

        if (
            message.mentions.users.has('1149799424000794655') &&
            message.channel.type === 0
        ) {
            const actualContent = message.content
                .replace(/<@[^>]*>/g, '')
                .trim()

            if (actualContent.length < 4) {
                const botMessage = await message.channel.send(shortQuestionInfo)

                setTimeout(function () {
                    botMessage.delete()
                }, 20000)
            } else {
                const threadName = actualContent.substring(0, 100)

                const threadOptions = {
                    name: threadName,
                    autoArchiveDuration: 60,
                }

                const thread = await message.startThread(threadOptions)

                const gelenMesaj = `Vue.js, bir JavaScript çerçevesidir ve özellikle kullanıcı arayüzü geliştirmek için kullanılır. State management, Vue.js gibi bir ön yüz çerçevesi kullanırken oldukça önemlidir. İşte Vue.js ile state management arasındaki ilişki:

Vue.js Bileşenleri: Vue.js, uygulamanızı bileşen tabanlı bir şekilde oluşturmanıza olanak tanır. Her bileşen, kendi iç durumunu ve görüntüsünü yönetebilir. Bu bileşenler genellikle bir kullanıcının etkileşimde bulunduğu arayüz öğelerini temsil eder.

Component State (Bileşen Durumu): Vue.js bileşenleri, kendi iç durumlarını yönetir. Örneğin, bir düğmeye tıklama sayısını takip etmek veya bir formun doldurulduğu durumu saklamak gibi işlemler için bileşenler iç durumlarını kullanır.

Global State Management: Büyük ve karmaşık Vue.js uygulamalarında, farklı bileşenler arasında veri paylaşımı gerekebilir. Bu noktada, global state management (genel durum yönetimi) araçları kullanılır. Vue.js ekosisteminde Vuex gibi state management kütüphaneleri yaygın olarak kullanılır.

Vuex: Vuex, Vue.js uygulamalarında global durum yönetimi için tasarlanmış bir kütüphanedir. Vuex, merkezi bir veri deposu kullanır ve tüm bileşenlerin bu depoyu kullanarak verilere erişmesini ve güncellemesini sağlar. Bu, farklı bileşenler arasında veri paylaşımını ve tutarlılığını sağlar.

Asenkron İşlemler ve API İletişimi: Vue.js uygulamaları sıklıkla asenkron veri işleme ve harici API'lerle iletişim gerektirir. State management, bu tür işlemlerin sonuçlarını saklamak ve bileşenlere iletmek için kullanılabilir.

Yani, Vue.js ile state management, uygulamanızın bileşenleri arasında veri paylaşımını ve yönetimini düzenlemek için kullanılır. Bu, uygulamanızın daha iyi ölçeklenebilir, bakımı daha kolay ve daha tutarlı bir şekilde çalışmasını sağlar. Vuex gibi kütüphaneler, Vue.js uygulamalarında bu tür durum yönetimini kolaylaştırır ve düzenler.`
                const messages = splitMessage(gelenMesaj)

                for (const msg of messages) {
                    thread.send(msg)
                }
            }
        }
        // 11 is the type of the thread channel. source = https://discord-api-types.dev/api/next/discord-api-types-v10/enum/ChannelType
        if (
            message.channel.type === 11 &&
            message.channel.ownerId === '1149799424000794655'
        ) {
            if (message.content.length < 4) {
                const botMessage = await message.channel.send(shortQuestionInfo)
                setTimeout(function () {
                    message.delete()
                    botMessage.delete()
                }, 20000)

                return
            } else {
                const gelenMesaj = `Vue.js, bir JavaScript çerçevesidir ve özellikle kullanıcı arayüzü geliştirmek için kullanılır. State management, Vue.js gibi bir ön yüz çerçevesi kullanırken oldukça önemlidir. İşte Vue.js ile state management arasındaki ilişki:

Vue.js Bileşenleri: Vue.js, uygulamanızı bileşen tabanlı bir şekilde oluşturmanıza olanak tanır. Her bileşen, kendi iç durumunu ve görüntüsünü yönetebilir. Bu bileşenler genellikle bir kullanıcının etkileşimde bulunduğu arayüz öğelerini temsil eder.

Component State (Bileşen Durumu): Vue.js bileşenleri, kendi iç durumlarını yönetir. Örneğin, bir düğmeye tıklama sayısını takip etmek veya bir formun doldurulduğu durumu saklamak gibi işlemler için bileşenler iç durumlarını kullanır.

Global State Management: Büyük ve karmaşık Vue.js uygulamalarında, farklı bileşenler arasında veri paylaşımı gerekebilir. Bu noktada, global state management (genel durum yönetimi) araçları kullanılır. Vue.js ekosisteminde Vuex gibi state management kütüphaneleri yaygın olarak kullanılır.

Vuex: Vuex, Vue.js uygulamalarında global durum yönetimi için tasarlanmış bir kütüphanedir. Vuex, merkezi bir veri deposu kullanır ve tüm bileşenlerin bu depoyu kullanarak verilere erişmesini ve güncellemesini sağlar. Bu, farklı bileşenler arasında veri paylaşımını ve tutarlılığını sağlar.

Asenkron İşlemler ve API İletişimi: Vue.js uygulamaları sıklıkla asenkron veri işleme ve harici API'lerle iletişim gerektirir. State management, bu tür işlemlerin sonuçlarını saklamak ve bileşenlere iletmek için kullanılabilir.

Yani, Vue.js ile state management, uygulamanızın bileşenleri arasında veri paylaşımını ve yönetimini düzenlemek için kullanılır. Bu, uygulamanızın daha iyi ölçeklenebilir, bakımı daha kolay ve daha tutarlı bir şekilde çalışmasını sağlar. Vuex gibi kütüphaneler, Vue.js uygulamalarında bu tür durum yönetimini kolaylaştırır ve düzenler.`

                const messages = splitMessage(gelenMesaj)

                for (const msg of messages) {
                    message.channel.send(msg)
                }
            }
        }
    },
}
