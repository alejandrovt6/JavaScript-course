import alias, { clientName, salary, showInfo, Client } from "./client.js";
import { Company } from './company.js'

// puedes cambiar el nombre de la función por defecto (alias) o si la función es anónima
// si no es default puedes dar alias con "as". Ej: clientName as alias

console.log(clientName)
console.log(salary)

console.log(showInfo(clientName,salary))

const client = new Client(clientName,salary)

console.log(client)
console.log(client.showInfo())

console.log('*****************')

const company = new Company('Developer X', 1000, 'Learning')
console.log(company)
console.log(company.showInfo())

console.log('*****************')

alias()