import { expect } from "chai";
import { createCalculator } from "./calc.js";

describe("createCalculator", function () {
    it("should return 0 for get", function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    });

    it("should return 5 after add(2) and add(3)", function () {
        let calculator = createCalculator();
        calculator.add(2);
        calculator.add(3);
        expect(calculator.get()).to.equal(5);
    });

    it("should return 2 after add(3), subtract(1)", function () {
        let calculator = createCalculator();
        calculator.add(3);
        calculator.subtract(1);
        expect(calculator.get()).to.equal(2);
    });

    it("should return -4 after subtract(4)", function () {
        let calculator = createCalculator();
        calculator.subtract(4);
        expect(calculator.get()).to.equal(-4);
    });
});
