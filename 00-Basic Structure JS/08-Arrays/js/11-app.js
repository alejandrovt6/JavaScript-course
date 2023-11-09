const cart = [
    { name: 'TV 29 inch', price: 400 },
    { name: 'mobile phone', price: 550 },
    { name: 'tablet', price: 425 },
    { name: 'computer', price: 350 },
    { name: 'laptop', price: 200 },
    { name: 'speakers', price: 10 }
]

const newArray1 = cart.forEach(function(product) {
    return `${product.name} - Price: ${product.price}`
})

// same but create new array
const newArray2 = cart.map(function(product) {
    return `${product.name} - Price: ${product.price}`
})

console.log(newArray1)
console.log(newArray2)
