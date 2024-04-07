let expect = require("chai").expect;
let index = require("./index");

describe("sum(arr) - sum array of numbers", function () {
    it("should return 5 for ['1','2','2']", function () {
        expect(index.sum3Numbers(["1", "2", "2"])).to.be.equal(5);
    });
});
describe("sum(arr) - sum array of numbers", function () {
    it("should return 3 for ['1','2']", function () {
        expect(index.sum(["1", "2"])).to.be.equal(3);
    });
});
describe("isSymetric(arr) - check for arr symetry", function () {
    it("should return true for ['1','2','1']", function () {
        expect(index.isSymmetric(["1", "2", "1"])).to.be.equal(true);
    });
});
describe("isSymetric(arr) - check for arr symetry", function () {
    it("should return false for ['8','2','1']", function () {
        expect(index.isSymmetric(["8", "2", "1"])).to.be.equal(false);
    });
});
describe("createCalculator() - output correct number", function () {
    it("should initially have a value of 0", function () {
        const calculator = index.createCalculator();
        expect(calculator.get()).to.equal(0);
    });

    it("should correctly add numbers", function () {
        const calculator = index.createCalculator();
        calculator.add(5);
        calculator.add(10);
        expect(calculator.get()).to.equal(15);
    });

    it("should correctly subtract numbers", function () {
        const calculator = index.createCalculator();
        calculator.subtract(5);
        calculator.subtract(3);
        expect(calculator.get()).to.equal(-8);
    });
});
