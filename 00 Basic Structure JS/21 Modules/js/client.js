// IIFE
(function() {
    console.log('Hello IIFE')

    const clientName = 'Ale'
    window.clientName = 'John'
})() // call function now


export const clientName = 'Alejandro'
export const salary = 1000

export function showInfo(name,salary) {
    return `Client ${name} - Salary ${salary}`
}

export class Client {
    constructor(name,salary) {
        this.name = name
        this.salary = salary
    }
    
    showInfo() {
        return `Client ${this.name} - Salary ${this.salary}`
    }
}

export default function newFunction() {
    console.log('Hello default')
}