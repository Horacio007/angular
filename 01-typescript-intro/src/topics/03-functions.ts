function addNumber(a: number, b:number):number {
    return a+b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a+b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2) {
    return firstNumber * base;
}

// const result:number = addNumber(1,2)
// const result2:string = addNumbersArrow(1,2)
// const multiplyResult:number = multiply(5)
// console.log({multiplyResult})

interface Character {
    name:string;
    hp:number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount:number) => {
    character.hp += amount;
}

const aaragon:Character = {
    name: 'Aaragon',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }

}

healCharacter(aaragon, 25);
healCharacter(aaragon, 5);
aaragon.showHp();

export {};