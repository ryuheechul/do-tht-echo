import chai, { expect } from "chai";
import chaiHttp from "chai-http";

const testPort = "3030";
process.env.ECHO_SERVER_PORT = testPort;

import server from "../src/app";

chai.use(chaiHttp);

describe("api", () => {
  it("post", (done) => {
    chai
      .request(server)
      .post(`/api/echo`)
      .auth("tester", "testing")
      .send({
        whattimeisit: "time to echo!",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it("put", (done) => {
    chai
      .request(server)
      .put(`/api/echo`)
      .auth("tester", "testing")
      .send({
        whattimeisit: "time to echo!",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it("echoed", (done) => {
    chai
      .request(server)
      .post(`/api/echo`)
      .auth("tester", "testing")
      .send({
        echoed: true,
      })
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });
});
