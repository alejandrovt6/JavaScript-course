const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const cart = [
    { name: '27-inch Monitor', price: 500 },
    { name: 'Television', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Headphones', price: 300 },
    { name: 'Keyboard', price: 400 },
    { name: 'Mobile Phone', price: 700 },
];

// find an index
const index = months.findIndex( month => month == 'March')
console.log(index)

// find a index of object array
const index2 = cart.findIndex( product => product.price == 100)
console.log(index2)


