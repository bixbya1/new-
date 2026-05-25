const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/categories', (req, res) => {
  res.json([
    { id: 1, name: 'Gaming' },
    { id: 2, name: 'Software' },
    { id: 3, name: 'Gift Cards' },
    { id: 4, name: 'AI Tools' },
    { id: 5, name: 'Subscriptions' },
    { id: 6, name: 'eSIM Plans' },
  ]);
});

app.get('/products', (req, res) => {
  res.json([]);
});

app.get('/orders', (req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
