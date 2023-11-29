// Set
const cart = new Set()

cart.add('T-Shirt')
cart.add('Disk 1')
cart.add('Disk 2')
cart.add('Disk 3')

cart.delete('Disk 1')

console.log(cart.has('Disk 2'))

console.log(cart.size)

cart.forEach(product => {
    console.log(product)
})

console.log(cart)

cart.clear()

console.log(cart)


// delete duplicates
const num = [10,10,20,30,40,40,50,50,60]

const noDuplicates = new Set(num)

console.log(noDuplicates)