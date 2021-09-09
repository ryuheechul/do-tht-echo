import express from 'express';

const app = express();
const port = 3000;

app.get('/api/echo', async (req, res) => {
  res.send(
    'I will be an echo server soon'
  );
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
