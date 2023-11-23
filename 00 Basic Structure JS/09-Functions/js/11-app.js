const cart = [
    { name: 'TV 29 inch', price: 400 },
    { name: 'mobile phone', price: 550 },
    { name: 'tablet', price: 425 },
    { name: 'computer', price: 350 },
    { name: 'laptop', price: 200 },
    { name: 'speakers', price: 10 }
]

cart.forEach((product) => console.log(`${product.name} - Price: ${product.price}`))

const newArray2 = cart.map((product) => {
    return `${product.name} - Price: ${product.price}`
})

console.log(newArray2)
