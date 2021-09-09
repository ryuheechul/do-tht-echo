import express from 'express';
import { json } from 'body-parser';
import echo from './echo';

const app = express();
const port = 3000;

app.use(json());

async function echoHandler(req, res) {
  try {
    res.send(
      await echo(req.body)
    );
  }
  catch(err) {
    res.status(500).send(err);
  };
}

app.post('/api/echo', echoHandler);
app.put('/api/echo', echoHandler);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
