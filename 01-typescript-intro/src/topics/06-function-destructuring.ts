export interface Product {
    description:string;
    price:number;

}

// const phone:Product = {
//     description: 'Nokia A1',
//     price: 150
// }

// const tablet:Product = {
//     description: 'iPadAir',
//     price:250.0
// }

interface TaxCalculationOptions {
    tax:number;
    products:Product[];
}

// function taxCalculation(options:TaxCalculationOptions):[number, number]  {
// function taxCalculation({tax, products}:TaxCalculationOptions):[number, number]  {
export function taxCalculation(options:TaxCalculationOptions):[number, number]  {
    const {tax, products} = options;
    
    let total = 0;

    products.forEach( ({price}) => {
        total += price; 
    });

    return [total, total*tax];
}

// const shoppingCart:Product[] = [phone, tablet];
// const tax:number = 0.15

// const [totalCalculated, taxTotal] = taxCalculation({
//     products: shoppingCart,
//     tax:tax
// });

// console.log('Total:', totalCalculated);
// console.log('Tax:', taxTotal);

// export {};