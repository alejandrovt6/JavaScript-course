"use strict"; // strict mode

const product = {
    name: 'TV 20 inch',
    price: 300,
    available: true
}

Object.freeze( product ) // you can't edit the object

console.log(Object.isFrozen(product)) // true