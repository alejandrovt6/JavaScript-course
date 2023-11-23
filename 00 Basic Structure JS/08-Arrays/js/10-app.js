const cart = [
    { name: 'TV 29 inch', price: 400 },
    { name: 'mobile phone', price: 550 },
    { name: 'tablet', price: 425 },
    { name: 'computer', price: 350 },
    { name: 'laptop', price: 200 },
    { name: 'speakers', price: 10 }
]

for(let i=0;i<cart.length;i++) {
    // console.log(cart[i])
    // console.log(cart[i].name)
    console.log(`${cart[i].name} - Price: ${cart[i].price}`)
}

console.log('**********')

cart.forEach(function(product) {
    console.log(`${product.name} - Price: ${product.price}`)
})

