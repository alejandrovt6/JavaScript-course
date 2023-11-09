const toDo = ['Study JS', 'Eat', 'Mop the floor', 'Project']

toDo.forEach((pending) => console.log(pending))
toDo.forEach((pending, index) => console.log(`${index} : ${pending}`))

const cart = [
    { name: 'TV 29 inch', price: 400 },
    { name: 'mobile phone', price: 550 },
    { name: 'tablet', price: 425 },
    { name: 'computer', price: 350 },
    { name: 'laptop', price: 200 },
    { name: 'speakers', price: 10 }
]

cart.forEach((product) => console.log(product.name))
// const newArray = cart.forEach((product) => product.name)

cart.map((product) => console.log(product.name))
// const newArray2 = cart.map(product => product.name)