export default async function handler(req, res) {
    if (req.method === 'POST') {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const from = process.env.TWILIO_PHONE_NUMBER;
        const to = process.env.TWILIO_RECEIVER_PHONE_NUMBER;
        const client = require('twilio')(accountSid, authToken);
        client.messages
            .create({
                body: 'testing',
                from: from,
                to: to,
            })
            .then((message) => {
                message.status !== 'failed'
                    ? res.status(200).json({ successful: true })
                    : res.status(200).json({ successful: false });
            })
            .catch((error) => {
                if (error) {
                    res.status(500).json({ successful: false });
                }
            });
    }
}
