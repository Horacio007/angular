export class Person {
    // public name:string;
    // private address:string;

    // constructor(name:string, address:string) {
    //     this.name = name;
    //     this.address = address;
    // }

    constructor(
        public firstName:string,
        public lastName:string, 
        private address:string = 'No Address'
    ){ }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string
//     ) {
//         super(realName, 'New York');
//     }
// }

// export class Hero {

//     public person:Person;

//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string
//     ) {
//         this.person = new Person(realName);
//     }
// }

export class Hero {
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person
    ) { }
}

// const ironMan:Person = new Person('IronMan', 'New York');
const tony:Person = new Person('Tony', 'Stark', 'New York');
const ironMan:Hero = new Hero('IronMan', 45, 'Tony Stark', tony);
console.log(ironMan);