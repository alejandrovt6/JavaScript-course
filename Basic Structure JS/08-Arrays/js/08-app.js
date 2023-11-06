const cart = []

const tv = {
    name: 'TV 32 inch',
    price: 400
}

const mobile = {
    name: 'mobile phone 5 inch',
    price: 550
}

const tablet = {
    name: 'tablet 7 inch',
    price: 600
}

cart.push(tv) 
cart.push(tablet)
cart.unshift(mobile) 

console.table(cart)

// delete last
cart.pop()

// delete first
cart.shift()

console.table(cart)


cart.push(tv) 
cart.push(tablet)
cart.unshift(mobile) 

cart.splice(0, 2) // position, number of elements

console.table(cart)