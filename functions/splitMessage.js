function splitMessage(message) {
    const maxLength = 2000
    const messages = []

    while (message.length > 0) {
        if (message.length <= maxLength) {
            messages.push(message)
            break
        } else {
            const chunk = message.slice(0, maxLength)
            messages.push(chunk)
            message = message.slice(maxLength)
        }
    }

    return messages
}

module.exports = splitMessage
