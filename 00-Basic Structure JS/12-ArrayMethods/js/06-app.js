const cart = [
    { name: '27-inch Monitor', price: 500 },
    { name: 'Television', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Headphones', price: 300 },
    { name: 'Keyboard', price: 400 },
    { name: 'Mobile Phone', price: 700 },
];

const result = cart.every(product => product.price < 500) 
console.log(result) // false because not all products have a condition

const result2 = cart.some(product => product.price < 500) 
console.log(result2) // true because at least one product has a condition