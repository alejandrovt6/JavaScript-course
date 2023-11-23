// class declaration
class Client {
    constructor(name,balance) {
        this.name = name
        this.balance = balance
    }
}

const ale = new Client('Ale',300)
console.log(ale);

//class expresion
const Client2 = class {
    constructor(name,balance) {
        this.name = name
        this.balance = balance
    }
}

const john = new Client2('John',300)
console.log(john)