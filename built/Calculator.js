"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator(currentAge, desiredRetirementAge, currentYear) {
        if (currentYear === void 0) { currentYear = 0; }
        this.currentAge = currentAge;
        this.desiredRetirementAge = desiredRetirementAge;
        this.currentYear = currentYear;
        if (!Number.isInteger(currentAge) ||
            !Number.isInteger(desiredRetirementAge) ||
            !Number.isInteger(currentYear))
            throw new Error("Invalid, all inputs must be an Interger");
    }
    Calculator.prototype.workingYearsLeft = function () {
        return (this.desiredRetirementAge - this.currentAge);
    };
    Calculator.prototype.retirementYear = function (workingYearsLeft) {
        return (this.currentYear + workingYearsLeft);
    };
    return Calculator;
}());
exports.default = Calculator;
