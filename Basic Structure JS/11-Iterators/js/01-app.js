for(let i=0;i<5;i++) {
    console.log(`Number: ${i}`)
}

for(let i=1;i<=5;i++) {
    if (i % 2 == 0) {
        console.log(`Number ${i} is PAIR`);
    } else {
        console.log(`Number ${i} is ODD`)
    }
}

const cart = [
    { name: 'TV 29 inch', price: 400 },
    { name: 'mobile phone', price: 550 },
    { name: 'tablet', price: 425 },
    { name: 'computer', price: 350 },
    { name: 'laptop', price: 200 },
    { name: 'speakers', price: 10 }
]

for (let i=0;i<cart.length;i++) {
    console.log(`Product: ${cart[i].name} cost: ${cart[i].price}`);
}

for (let i=0;i<cart.length;i++) {
    console.log(cart[i].price)
}
  