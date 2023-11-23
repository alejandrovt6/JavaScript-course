class Client {
    constructor(name,balance) {
        this.name = name
        this.balance = balance
    }

    showInfo() {
        return `Client: ${this.name} / Balance: ${this.balance}`
    }

    static welcome() { 
        return `Welcome here Client`
    }
}

// inheritance
class Company extends Client {
    constructor(name,balance,number,category) {
        super(name,balance)
        this.number = number
        this.category = category
    }

    showInfo() {
        return `Client: ${this.name} / Balance: ${this.balance} / Number: ${this.number} Category: ${this.category} `
    }

    static welcome() { 
        return `Welcome here Company`
    }

}

const ale = new Client('Ale',300)
const company = new Company('DevWorld', 600, 654789,'Development')
console.log(company.showInfo())
console.log(company)