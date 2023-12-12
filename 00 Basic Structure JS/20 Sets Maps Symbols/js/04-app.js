// WeakMap
const product = {
    idProduct : 10
}

const weakmap = new WeakMap()

weakmap.set(product, 'Monitor')

console.log(weakmap.has(product))
console.log(weakmap.get(product))