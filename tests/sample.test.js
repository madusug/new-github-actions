const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/server"); // Import Express app

chai.use(chaiHttp);
const { expect } = chai;

describe("API Tests", function () {
  it("should return 200 for the root route", function (done) {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hello, World!");
        done();
      });
  });
});

