"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente = /** @class */ (function () {
    function cliente(name, age, sex, username, password) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.username = username;
        this.password = password;
    }
    cliente.prototype.changeUsername = function (newName) {
        this.username = newName;
    };
    return cliente;
}());
var user = new cliente('Mauricio Carvalho', 26, 'M', 'mdesouza', 1234);
user.changeUsername('mdesouza47');
console.table(user);
