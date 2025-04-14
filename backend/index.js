const express = require('express');
const app = express();
const PORT = 3000;

const llms = ["ChatGPT", "Claude", "Gemini", "LLaMA", "Mistral"];

app.get('/api/llms', (req, res) => {
  res.json({ llms });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
