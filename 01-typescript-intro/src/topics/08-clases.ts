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

export class Hero extends Person {
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string
    ) {
        super(realName, 'New York');
    }
}

// const ironMan:Person = new Person('IronMan', 'New York');
const ironMan:Hero = new Hero('IronMan', 45, 'Tony Stark');
console.log(ironMan);