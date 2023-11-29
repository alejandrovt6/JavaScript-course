// WeakSet -> only objects
const weakset = new WeakSet()

const client = {
    name: 'Ale',
    salary: '1000'
}

weakset.add(client)

console.log(weakset)