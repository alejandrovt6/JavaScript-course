import { Client } from './client.js'

export class Company extends Client {
    constructor(name,salary,category) {
        super(name,salary)
        this.category = category
    }

    showInfo() {
        return `Client ${this.name} - Salary ${this.salary} - Category ${this.category}`
    }
}