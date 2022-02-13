export default function handler(req, res) {
    if (req.method === 'POST') {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const from = process.env.TWILIO_PHONE_NUMBER;
        const client = require('twilio')(accountSid, authToken);
        /*
        client.messages
            .create({
                body: 'testing',
                from: from,
                to: '+16512311655',
            })
            .then((message) => console.log(message.status));
            */
        res.status(200).json({ successful: true });
    }
}
