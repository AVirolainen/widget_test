export default async function handler(req, res) {
    if (req.method === "POST") {
        const logMessage = req.body.message;
        console.log("Client Log:", logMessage);
        res.status(200).json({ status: "logged" });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}