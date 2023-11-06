const product = 'TV 19 inch';

// replace
console.log(product)
console.log(product.replace('inch', '"'))
console.log(product.replace('TV', 'Tablet'))

// slice to cut
console.log(product.slice(0,8))

// alternative to slice
console.log(product.substring(0,7))

const user = "Alejandro"
console.log(user.substring(0,1))
console.log(user.charAt(0))