const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const cart = [
    { name: '27-inch Monitor', price: 500 },
    { name: 'Television', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Headphones', price: 300 },
    { name: 'Keyboard', price: 400 },
    { name: 'Mobile Phone', price: 700 },
];

// check if value exists 
const result =  months.includes('January')
console.log(result) // true

// in array use .some
const result2 = cart.some(product => product.name == 'Television')
console.log(result2)

const result3 = months.some(month => month == 'February')
console.log(result3)

// check if some values exists 
