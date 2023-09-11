const { Events } = require('discord.js')

module.exports = {
    name: Events.GuildCreate,
    once: true,
    async execute(guild) {
        console.log('joined a new guild')
        const channel = await guild.channels.create({
            name: 'taiga',
        })

        const helloText = `
Hello ${guild.name} ! It’s so nice to be here :sunglasses: thank you for adding me to your organization.

I’m an AI-powered teaching assistant from Coyotiv School of Software Engineering. Feel free to ask me any questions about software engineering in web development, and I’ll do my best to guide you. We can have long conversations about any topic you like, and I can even help you understand code blocks.
You can DM me here or invite me to join any channel. I will respond in a thread if you mention me.
Here are a couple of example questions you can ask me to get started:
- @Taiga how can I access to an environment variable with JavaScript?
- @Taiga can you give me a detailed explanation of what components in frontend are? and at the end, make 5 bullet points of the most important things to remember.
- @Taiga I need to create an image in docker and it is not working, can you tell me what this mean?
These are just a couple of examples! Looking forward to talking to you soon :sunglasses:
Feel free to drop us an email at **contact@asktaiga.ai** if you have any questions or run into any trouble!`

        channel.send(helloText)
    },
}
