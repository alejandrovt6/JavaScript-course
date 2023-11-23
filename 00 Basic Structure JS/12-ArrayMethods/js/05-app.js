const cart = [
    { name: '27-inch Monitor', price: 500 },
    { name: 'Television', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Headphones', price: 300 },
    { name: 'Keyboard', price: 400 },
    { name: 'Mobile Phone', price: 700 },
];

// forEach
let result = ''
cart.forEach((product, index) => {
    if(product.name === 'Tablet') {
        result = cart[index]
    }
})
console.log(result)

// find
const result2 = cart.find(product => product.name == 'Tablet')
console.log(result2)
