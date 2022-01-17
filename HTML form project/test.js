"use strict";
exports.__esModule = true;
exports.Test = void 0;
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.testMethod = function () {
        var empCode = '007';
        var employeeCode = empCode;
        console.log(typeof (employeeCode));
    };
    return Test;
}());
exports.Test = Test;
var a = new Test();
a.testMethod();
