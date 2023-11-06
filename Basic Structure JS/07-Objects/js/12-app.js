// object literal
const product = {
    name: 'TV 20 inch',
    price: 300,
    available: true
}

// object constructor
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.available = true;
}

const product2 = new Product('TV 24 inch', 450)
console.log(product2)
