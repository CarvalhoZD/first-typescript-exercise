import { time } from "console";

class employer {
    public name: string;
    public age: number;
    public job: string;
    public timeOfDay: string;
    private sex: string;

    constructor(name: string , age: number, job: string, timeOfDay: string, sex: string) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.timeOfDay = timeOfDay;
    }   

    public sexIs (morf: string){
        this.sex = morf;
    }
}

const employ: employer = new employer('Mauricio Carvalho',26,'Ti auditor','Morning','Man');

employ.sexIs('Male');

console.table(employ);