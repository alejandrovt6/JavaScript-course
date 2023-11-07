const cart = [
    { name: '27-inch Monitor', price: 500 },
    { name: 'Television', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Headphones', price: 300 },
    { name: 'Keyboard', price: 400 },
    { name: 'Mobile Phone', price: 700 },
];

let result

result = cart.filter(product => product.price > 400)
console.log(result)

result = cart.filter(product => product.name !== 'Tablet')
console.log(result)
