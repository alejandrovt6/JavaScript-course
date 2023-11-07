const cart = [
    { name: '27-inch Monitor', price: 500 },
    { name: 'Television', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Headphones', price: 300 },
    { name: 'Keyboard', price: 400 },
    { name: 'Mobile Phone', price: 700 },
];

// with forEach
let total = 0

cart.forEach(product => total += product.price)
console.log(total)

// reduce
let total2 = cart.reduce((total, product) => total + product.price, 0)
console.log(total2)
