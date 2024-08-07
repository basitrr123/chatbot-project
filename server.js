const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Endpoint for handling chat messages from the website
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post('http://localhost:3000/ask', { message: userMessage });
        res.json({ reply: response.data.reply });
    } catch (error) {
        res.status(500).send('Error communicating with the chat service.');
    }
});

// Start the serverN
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
