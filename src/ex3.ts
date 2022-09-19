class smartphone {
    public name: string;
    public color: string;
    public madeby: string;
    public system: string;
    private size: number;

    constructor(name: string , color: string, madeby: string, system: string, size: number) {
    this.name = name;
    this.color = color;
    this.madeby = madeby;
    this.system = system;
    }   

    public itsSize (pSize: number){
        this.size = pSize;
    }
}

const phone: smartphone = new smartphone('Galaxy S20 FE','Navy Blue','Samsung','Android',64);

phone.itsSize(128);

console.table(phone);