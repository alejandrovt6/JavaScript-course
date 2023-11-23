"use strict"; // strict mode

const product = {
    name: 'TV 20 inch',
    price: 300,
    available: true
}

Object.seal( product ) // can be modified, except add or delete elements

product.available = false;

console.log(product)
console.log(Object.isSealed(product))