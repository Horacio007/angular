export class Person {
    // public name:string;
    // private address:string;

    // constructor(name:string, address:string) {
    //     this.name = name;
    //     this.address = address;
    // }

    constructor(
        public name:string, 
        private address:string = 'No Address'
    ){ }
}

const ironMan:Person = new Person('IronMan', 'New York');
console.log(ironMan);