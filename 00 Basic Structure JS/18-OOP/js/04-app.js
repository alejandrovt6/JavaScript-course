class Client {
    #name; // private
    constructor(name,balance) {
        this.#name = name 
        this.balance = balance
    }

    showInfo() {
        return `Client: ${this.#name} / Balance: ${this.balance}` // aqui sí se verá porque se llama mediante su clase
    }

    static welcome() { 
        return `Welcome here Client`
    }
}

const ale = new Client('Ale',300)
console.log(ale.showInfo())