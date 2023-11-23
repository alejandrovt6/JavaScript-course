const product = {
    name: 'TV 20 inch',
    price: 300,
    available: false
}

// add new properties
product.image = 'image.jpg'

// delete properties
delete product.available;

console.log(product)