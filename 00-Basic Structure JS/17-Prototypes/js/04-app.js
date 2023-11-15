function Client(name,balance) {
    this.name = name
    this.balance = balance
}

Client.prototype.typeClient = function() {
    let type

    if(this.balance > 10000) {
        type = 'Gold'
    } else if(this.balance > 5000) {
        type = 'Platinum'
    } else {
        type = 'Normal'
    }
    return type
}

Client.prototype.nameClientBalance = function() {
    return `Name: ${this.name}, Balance: ${this.balance}, Type: ${this.typeClient()}`
}

Client.prototype.withdrawBalance = function(withdraw) {
    this.balance -= withdraw
}

// heredar funciones
Person.prototype = Object.create(Client.prototype)
Person.prototype.constructor = Client

// inherit / heredar constructor
function Person(name,balance,number) {
    Client.call(this,name,balance) 
    this.number = number
}

const john = new Person('John',5000,1245)
console.log(john)
console.log(john.nameClientBalance())

Person.prototype.showNumber = function() {
    return `The number of this person is ${this.number}`
}

console.log(john.showNumber())