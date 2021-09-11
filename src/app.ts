import express from "express";
import morgan from "morgan";
import basicAuth from "express-basic-auth";
import { json } from "body-parser";
import echo from "./echo";
import users from "../data/allowedUsers.json";
import listen from "./listen";

const app = express();
export default app;

const port = parseInt(process.env.ECHO_SERVER_PORT || "") || 3000;

app.use(
  morgan("combined") // automatic logging for express
);

app.use("/api/echo", json(), basicAuth({ users }));

async function echoHandler(req: express.Request, res: express.Response) {
  try {
    res.send(await echo(req.body));
  } catch (err) {
    res.status(500).send(err);
  }
}

app.post("/api/echo", echoHandler);
app.put("/api/echo", echoHandler);
app.get("/", (req, res) => res.send("Hi, I'm echo server!"));

listen(app, port);
