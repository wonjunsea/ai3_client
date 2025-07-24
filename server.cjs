const express = require('express');//네이버 스튜디오 접근하려면 이거 필요합니다,서버만들어서 우회에서 접근해야함
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/clova-summary', async (req, res) => {
  try {
    const response = await axios.post(
      'https://clovastudio.stream.ntruss.com/v3/chat-completions/HCX-005',
      req.body,
      {
        headers: {
          Authorization: `Bearer ${process.env.CLOVA_API_KEY}`,
          'X-NCP-CLOVASTUDIO-REQUEST-ID': 'demo-' + Date.now(),
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message, detail: err.response?.data });
  }
});

app.listen(4000, () => {
  console.log('Proxy server running on http://localhost:4000');
}); 