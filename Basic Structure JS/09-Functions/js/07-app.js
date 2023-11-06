function sum(a,b) {
    return a + b
}

const result = sum(2,3)

console.log('*************')


let total = 0

function addToCart(price) {
    return total += price
}

function calcTaxes(total) {
    return total * 1.21
}

total = addToCart(300)

const totalPay = calcTaxes(total)

console.log(total)
console.log(`Total to pay is: ${totalPay}`)
