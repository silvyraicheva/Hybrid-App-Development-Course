import { expect } from "chai";
import { sum3Numbers as sum } from "./index.js";
describe("sum(arr) - sum array of numbers", function () {
    it("should return 5 for ['1','2','2']", function () {
        expect(sum(["1", "2", "2"])).to.be.equal(5);
    });
});
