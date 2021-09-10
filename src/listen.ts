import fs from 'fs';
import express from 'express';
import path from 'path';
import https from 'https';

function relativePath(p: string) {
  return path.join(__dirname, p);
}

function withHttp(app: express.Application, port: number) {
  app.listen(port, () => {
    console.log(`echo server is listening on ${port}`);
  });
}

function withHttps(app: express.Application, port: number) {
  const privateKey = fs.readFileSync( relativePath('../certs/localhost-key.pem' ));
  const certificate = fs.readFileSync( relativePath('../certs/localhost.pem' ));

  https.createServer({
      key: privateKey,
      cert: certificate
  }, app).listen(port);
}


export default function listen(app: express.Application, port: number): void {
  const asHttp = !!process.env.ECHO_SERVER_NO_HTTPS;

  let withThis = withHttps;
  if (asHttp) {
    withThis = withHttp
  }

  withThis(app, port);
}
