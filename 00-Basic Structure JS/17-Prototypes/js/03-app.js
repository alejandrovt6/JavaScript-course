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

const john = new Client('John', 6000)
console.log(john.typeClient());
console.log(john.nameClientBalance());
john.withdrawBalance(1000)
console.log(john.nameClientBalance());
