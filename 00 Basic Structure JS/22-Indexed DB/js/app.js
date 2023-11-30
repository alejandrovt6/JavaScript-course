// Indexed DB: API en JS para almacenar grandes cantidades de datos estructurados
// Almacena cualquier tipo de dato soportado por JS
let DB

document.addEventListener('DOMContentLoaded', () => {
    crmDB()

    setTimeout(() => {
        createClient()
    }, 2500)
})

function crmDB() {
    // crear base de datos 1.0
    let crmDB = window.indexedDB.open('crm', 1) // nombre, versión
    // si hay error
    crmDB.onerror = function() {
        console.log('There was an error creating DB')
    }
    // si se creó bien
    crmDB.onsuccess = function() {
        console.log('DB created')
        DB = crmDB.result
    }
    // config
    crmDB.onupgradeneeded = function(e) {
        // console.log('This method only execute one time')
        const db = e.target.result

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        })
        // definir columnas
                                // nombre columna, keyPath (index)
        objectStore.createIndex('name','name',{ unique: false })
        objectStore.createIndex('email','email',{ unique: true })
        objectStore.createIndex('number','number',{ unique: true })
    }
}

function createClient() {
    let transaction = DB.transaction(['crm'], 'readwrite')

    transaction.oncomplete = function() {
        console.log('Transaction completed')
    }

    transaction.onerror = function() {
        console.log('There was a transaction error')
    }

    const objectStore = transaction.objectStore('crm')

    const newClient = {
        number: 123456789,
        name: 'Ale',
        email: 'email@email.com'
    }

    const peticion = objectStore.add(newClient)

    console.log(peticion)
}