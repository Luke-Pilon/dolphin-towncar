export default function formatTwilioMessage(data) {
    let message = 'New quote request:\n';
    for (const [key, value] of Object.entries(data)) {
        const line = `${key}: ${value}\n`;
        message += line;
    }
    return message;
}
