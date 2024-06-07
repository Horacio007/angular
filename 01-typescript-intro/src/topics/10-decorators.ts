function classDecoration<T extends {new (...args:any[]):{}}> (
    constructor: T
) {
    return class extends constructor {
        newPropoerty = 'New Property';
        hello = 'overwrite';
    }
}

@classDecoration
export class SuperClass {
    public myProperty:string = 'Abc123';
    
    print() {
        console.log(['Hola Mndo']);
    }
}
console.log(SuperClass);

const myClass:SuperClass = new SuperClass();
console.log(myClass);