// Map -> key - value
const client = new Map()

client.set('name','Ale')
client.set('type','Premium')
client.set('salary','1000')
client.set([0],true)

console.log(client)
console.log(client.size)
console.log(client.has('name'))
console.log(client.get('name'))

client.delete('saldo')
client.clear()

const patient = new Map([['name', 'patient'], ['book', 'no specific']]) 

patient.set('Dr', 'Smith')
patient.set('name', 'Fernández') // rewrite a value


console.log(patient)

console.log('****************')

patient.forEach(data => {
    console.log(data)
})

console.log('****************')

patient.forEach((data, index) => {
    console.log(index)
})