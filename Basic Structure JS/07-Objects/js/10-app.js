const product = {
    name: 'TV 20 inch',
    price: 300,
    available: true
}

const measurements = {
    weight: '1kg',
    height: '1m'
}

console.log(product, measurements)

const final = Object.assign(product, measurements)
console.log(final)

// spread operator
const final2 = { ...product, ...measurements }
console.log(final2)
