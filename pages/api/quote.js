export default function handler(req, res) {
    if (req.method === 'POST') {
        //TODO implement twilio messaging
        res.status(200).json({ successful: true });
    }
}
