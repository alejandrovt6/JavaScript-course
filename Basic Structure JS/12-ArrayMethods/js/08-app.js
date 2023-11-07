const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const cart = [
    { name: '27-inch Monitor', price: 500 },
    { name: 'Television', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Headphones', price: 300 },
    { name: 'Keyboard', price: 400 },
    { name: 'Mobile Phone', price: 700 },
];

// spread operator with index arrays
const months2 = [...months, 'August']
console.log(months2)

// spread operator with objects
const product = { product: 'Hard Drive', price: 200 }

const products = [...cart, product]
console.log(products)