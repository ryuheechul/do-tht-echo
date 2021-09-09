import express from 'express';
import { json } from 'body-parser';
import echo from './echo';

const app = express();
const port = 3000;

app.use(json());

app.post('/api/echo', (req, res) => {
  res.send(
    echo(req.body)
  );
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
