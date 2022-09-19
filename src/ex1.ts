import { access } from "fs";

class cliente {
    public name: string;
    public age: number;
    public sex: string;
    private username: string;
    private password: number;

    constructor(name: string , age: number, sex: string, username: string, password: number) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.username = username;
    this.password = password;

    }
   public changeUsername (newName: string){
    this.username = newName;
   }
}

const user: cliente = new cliente('Mauricio Carvalho', 26, 'M', 'mdesouza', 1234);

user.changeUsername('mdesouza47');

console.table(user);