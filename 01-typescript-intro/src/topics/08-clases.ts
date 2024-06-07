export class Person {
    public name:string;
    private address:string;

    constructor() {
        this.name = 'José';
        this.address = 'New York';
    }
}

const ironMan:Person = new Person();
console.log(ironMan);