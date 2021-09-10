import express from 'express';
import morgan from 'morgan';
import basicAuth from 'express-basic-auth';
import { json } from 'body-parser';
import echo from './echo';
import users from '../data/allowedUsers.json'

const app = express();
export default app;

const port = process.env.ECHO_SERVER_PORT || 3000;

app.use(
  json(),
  morgan('combined'), // automatic logging for express
  basicAuth({ users }),
);

async function echoHandler(req: express.Request, res: express.Response) {
  try {
    res.send(
      await echo(req.body)
    );
  }
  catch(err) {
    res.status(500).send(err);
  }
}

app.post('/api/echo', echoHandler);
app.put('/api/echo', echoHandler);

app.listen(port, () => {
  console.log(`echo server is listening on ${port}`);
});
