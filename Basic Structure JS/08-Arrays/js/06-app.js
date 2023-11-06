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

// REST operator
let result;
result = [...cart, tv]
result = [...result, mobile] // push
result = [tablet, ...result] // unshift

console.table(result)