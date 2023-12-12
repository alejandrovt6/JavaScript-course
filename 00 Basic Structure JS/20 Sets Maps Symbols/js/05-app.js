// Symbols
// never are equals
const sym1 = Symbol('1')
const sym2 = Symbol('2')

const name1 = Symbol()
const surname = Symbol()

const person = {}

person[name1] = 'Ale'
person[surname] = 'VT'
person.typeClient = 'Premium'
person.salary = 1000

console.log(person)
console.log(person[name1])

// define a symbol description
const clientName = Symbol('Client name')
const client = {}

client[clientName] = 'John'

console.log(client)
