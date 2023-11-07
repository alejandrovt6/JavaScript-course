const toDo = ['Study JS', 'Eat', 'Mop the floor', 'Project']

const cart = [
    { name: 'TV 29 inch', price: 400 },
    { name: 'mobile phone', price: 550 },
    { name: 'tablet', price: 425 },
    { name: 'computer', price: 350 },
    { name: 'laptop', price: 200 },
    { name: 'speakers', price: 10 }
]

for(let pending of toDo) {
    console.log(pending)
}

for(let product of cart) {
    console.log(product)
}
