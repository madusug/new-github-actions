const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server"); // Ensure this path is correct

// Use chai-http
chai.use(chaiHttp);
const { expect } = chai;

describe("API Tests", function () {
  it("should return 200 for the root route", function (done) {
    chai.request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

