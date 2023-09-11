const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Get info about the Taiga Bot.'),
    async execute(interaction) {
        const about = `
**Taiga**
**Introducing Taiga: The AI Teaching Assistant for Aspiring Software Engineers**
**Why Choose Taiga?**
1. **Personalized Learning Experience:** Taiga tailors its explanations and guidance to suit your unique learning style and preferences, ensuring you grasp concepts effectively.
2. **Comprehensive Knowledge Base:** Taiga covers a wide range of software engineering topics, from programming languages, data structures, and algorithms to software design patterns, version control systems, and more.
3. **Contextual Understanding:** Taiga recognizes the context of your questions, providing relevant and accurate information to address your specific queries.
4. **Interactive Examples:** Taiga offers hands-on examples, code snippets, and practice problems, helping you apply your learning and develop a deeper understanding of the concepts.
**Taiga's Core Features**
Taiga offers a range of features designed to support your learning journey:
- **Topic Exploration:** Explore software engineering topics in depth with Taiga's step-by-step guidance, which includes detailed explanations, examples, and practical tips.
- **Code Review Assistance:** Get assistance with reviewing your code, understanding error messages, and identifying areas for improvement.
- **Q&A Sessions:** Ask questions and engage in interactive discussions with Taiga to gain a deeper understanding of various concepts.
- **Collaborative Learning:** Taiga encourages collaboration by enabling you to share your learning progress and insights with your teammates or colleagues.
**Getting Started with Taiga**
Setting up Taiga in your Slack workspace is quick and easy. Follow these simple steps:
1. Click the "Add to Slack" button on the App Detail page.
2. Authorize Taiga to access your Slack workspace.
3. Invite Taiga to any channel or direct message, or write to it in private for a personalized learning experience.
`
        await interaction.reply({ content: about })
    },
}
