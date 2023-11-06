const cart = []

const tv = {
    name: 'TV 32 inch',
    price: 400
}

const mobile = {
    name: 'mobile phone 5 inch',
    price: 550
}

cart.push(tv) // 1
cart.unshift(mobile) // 0

console.table(cart)