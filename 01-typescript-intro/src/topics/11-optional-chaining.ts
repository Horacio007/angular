export interface Passenger {
    name:string;
    children?:string[];
}

const passenger1:Passenger = {
    name:'Horacio'
}

const passenger2:Passenger = {
    name:'Horacio',
    children: ['Nami', 'Zoro']
}

// const returnChildrenNumber = (passenger:Passenger) => {
//     const {name} = passenger;
//     const howManyChildren = passenger.children?.length || 0;

//     console.log(name,howManyChildren);

//     // return howManyChildren;
// }

const returnChildrenNumber = (passenger:Passenger):number => {
    if (!passenger.children) return 0;
    
    const {name} = passenger;
    const howManyChildren = passenger.children!.length;

    console.log(name,howManyChildren);

    return howManyChildren;
}


returnChildrenNumber(passenger1);