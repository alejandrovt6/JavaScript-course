function Client(name,balance) {
    this.name = name
    this.balance = balance
}

const ale = new Client('Ale',500)
console.log(ale)

function formatClient(client) {
    const {name,balance} = client
    return `Client ${name} has a balance of ${balance}`
}

function formatCompany(company) {
    const {name,balance,category} = company
    return `Company ${name} has a balance of ${balance} and belongs to the category ${category}`
}

console.log(formatClient(ale))

function Company(name,balance,category) {
    this.name = name
    this.balance = balance
    this.category = category
}

const myCompany = new Company('My Company', 2500, 'Development')

console.log(formatCompany(myCompany))