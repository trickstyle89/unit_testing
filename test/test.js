const chai = require('chai');  // import the chai library
const assert = chai.expect;  // establish a variable to be used in our tests
const validator = require('../javascript/groupValidator.js'); // import the file where our function lives

it("should return true if there are between 2 and 5 group members", () => {
  assert(validator.isGroupValid(["a", "b", "c", "d", "e"])).to.be.true;
});
it("should return true if there are between 2 and 5 group members", () => {
  assert(validator.isGroupValid(["a", "c", "d", "e"])).to.be.true;
});
it("should return true if there are between 2 and 5 group members", () => {
  assert(validator.isGroupValid(["a", "b", "c"])).to.be.true;
});