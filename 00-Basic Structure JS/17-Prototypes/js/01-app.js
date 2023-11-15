const client = {
    name: 'Ale',
    balance: 500
}

console.log(client)
// console.log(typeof client)

// Reusable
function Client(name,balance) {
    this.name = name
    this.balance = balance
}

const ale = new Client('Ale',500)
console.log(ale)
