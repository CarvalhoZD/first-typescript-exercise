"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employer = /** @class */ (function () {
    function employer(name, age, job, timeOfDay, sex) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.timeOfDay = timeOfDay;
    }
    employer.prototype.sexIs = function (morf) {
        this.sex = morf;
    };
    return employer;
}());
var employ = new employer('Mauricio Carvalho', 26, 'Ti auditor', 'Morning', 'Man');
employ.sexIs('Male');
console.table(employ);
