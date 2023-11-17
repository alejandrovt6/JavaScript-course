class Client {
    constructor(name,balance) {
        this.name = name
        this.balance = balance
    }

    showInfo() {
        return `Client: ${this.name} / Balance: ${this.balance}`
    }

    static welcome() { 
        return `Welcome here`
    }
}

const ale = new Client('Ale',300)
console.log(ale.showInfo());
console.log(Client.welcome()); // no need an instance

