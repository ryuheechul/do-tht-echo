import express from 'express';
import { json } from 'body-parser';
import echo from './echo';

const app = express();
const port = 3000;

app.use(json());

app.post('/api/echo', async (req, res) => {
  try {
    res.send(
      await echo(req.body)
    );
  }
  catch(err) {
    res.status(500).send(err);
  };
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
