for(let i=0;i<=10;i++) {
    if(i === 5) {
        console.log('It is five')
        continue;
    }
    console.log(`Number: ${i}`)
}

console.log('**********')

for(let i=0;i<=10;i++) {
    if(i === 5) {
        console.log('It is five')
        break;
    }
    console.log(`Number: ${i}`)
}

const cart = [
    { name: 'TV 29 inch', price: 400 },
    { name: 'mobile phone', price: 550 },
    { name: 'tablet', price: 425, discount: true },
    { name: 'computer', price: 350 },
    { name: 'laptop', price: 200 },
    { name: 'speakers', price: 10 }
]

for(let i=0;i<cart.length;i++) {
    if(cart[i].discount) {
        console.log(`Article ${cart[i].name} has discount`)
        continue;
    }
    console.log(cart[i].name)
}