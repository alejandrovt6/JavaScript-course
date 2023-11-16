// constructores
function Seguro(marca,year,tipo) {
    this.marca = marca
    this.year = year
    this.tipo = tipo
}

// realiza la cotización
// 1 = baja 1.05 / 2 = media 1.15 / 3 = alta 1.35
Seguro.prototype.cotizarSeguro = function () {

    let cantidad
    const base = 1500

    switch(this.marca) {
        case '1':
            cantidad = base * 1.05
            break;
        case '2':
            cantidad = base * 1.15
            break;
        case '3':
            cantidad = base * 1.35
            break;
        default:
            break;
    }

    // cada año de dif el total se reduce un 3%
    const diferencia = new Date().getFullYear() - this.year
    cantidad -= ((diferencia * 3) * cantidad) / 100

    // completo *+50% , básico *+30%
    if(this.tipo === 'básico') {
        cantidad *= 1.30
    } else if(this.tipo === 'completo') {
        cantidad *= 1.50
    } 
    return cantidad

}

function UI() {}

// llenar opciones de años
UI.prototype.yearOpciones = () => {
    const max = new Date().getFullYear()
    const min = max - 20

    const years = document.querySelector('#year')

    for (let i=max; i>min; i--) {
        let opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        years.appendChild(opcion)
    }
}

// muestra alertas
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    
    const div = document.createElement('div')

    if(tipo === 'error') {
        div.classList.add('error')
    } else {
        div.classList.add('correcto')
    }
    
    div.classList.add('mensaje', 'mt-10')
    div.textContent = mensaje

    // insertar en HTML
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.insertBefore(div, document.querySelector('#resultado'))

    setTimeout(() => {
        div.remove()
    }, 3000)

}

UI.prototype.mostrarResultado = (total, seguro) => {

    const {marca,year,tipo} = seguro
    let nombreMarca

    switch(marca) {
        case '1':
            nombreMarca = 'Gama baja'
            break;
        case '2':
            nombreMarca = 'Gama media'
            break;
        case '3':
            nombreMarca = 'Gama alta'
            break;
        default:
            break;
    }

    const div = document.createElement('div')
    div.classList.add('mt-10')

    div.innerHTML = `
        <p class="header">Resumen: </p>
        <p class="font-bold"> Marca: <span class="font-normal"> ${nombreMarca} </span></p>
        <p class="font-bold"> Año: <span class="font-normal"> ${year} </span></p>
        <p class="font-bold"> Tipo: <span class="font-normal capitalize"> ${tipo} </span></p>
        <p class="font-bold"> Total: <span class="font-normal"> ${Math.round(total)} € </span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado')

    // spinner
    const spinner = document.querySelector('#cargando')
    spinner.style.display = 'block'

    setTimeout(() => {
        spinner.style.display = 'none'
        resultadoDiv.appendChild(div)

    }, 3000);
}



// instanciar UI
const ui = new UI()

document.addEventListener('DOMContentLoaded', () => {
    ui.yearOpciones()
})

eventListeners()
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.addEventListener('submit',cotizarSeguro)
}

function cotizarSeguro(e) {
    e.preventDefault()
    
    const marca = document.querySelector('#marca').value
    const year = document.querySelector('#year').value
    const tipo = document.querySelector('input[name="tipo"]:checked').value
    
    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
        return;
    } else {
        ui.mostrarMensaje('Cotizando...','exito')

        // ocultar las cotiz. previas
        const resultados = document.querySelector('#resultado div')
        if(resultados != null) {
            resultados.remove()
        }

        // instanciar seguro
        const seguro = new Seguro(marca,year,tipo)
        const total = seguro.cotizarSeguro()

        ui.mostrarResultado(total,seguro)
    }
}
