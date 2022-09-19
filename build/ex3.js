var smartphone = /** @class */ (function () {
    function smartphone(name, color, madeby, system, size) {
        this.name = name;
        this.color = color;
        this.madeby = madeby;
        this.system = system;
    }
    smartphone.prototype.itsSize = function (pSize) {
        this.size = pSize;
    };
    return smartphone;
}());
var phone = new smartphone('Galaxy S20 FE', 'Navy Blue', 'Samsung', 'Android', 64);
phone.itsSize(128);
console.table(phone);
