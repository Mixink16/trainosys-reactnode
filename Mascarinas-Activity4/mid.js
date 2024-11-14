import express from 'express';
import rateLimitingMiddleware from './middleware.js';

const app = express();

app.use(rateLimitingMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
