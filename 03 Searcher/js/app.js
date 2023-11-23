const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const maximo = document.querySelector('#maximo')
const minimo = document.querySelector('#minimo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

const max = new Date().getFullYear()
const min = max - 10

const resultado = document.querySelector('#resultado')

const datosBusqueda = {
    marca : '',
    year : '',
    maximo : '',
    minimo : '',
    puertas : '',
    transmision : '',
    color : ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)
    yearSelect()
})

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value
    filtrarAutos()
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAutos()
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value
    filtrarAutos()
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value
    filtrarAutos()
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAutos()
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value
    filtrarAutos()
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value
    filtrarAutos()
})

function mostrarAutos(autos) {
    limpiarHTML()

    autos.forEach(auto => {

        const { marca, modelo, year, puertas, transmision, precio, color } = auto
        const autoHTML = document.createElement('p')

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio}
            - ${color}
            `;
            
        resultado.appendChild(autoHTML)
    })
}


function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function yearSelect() {
    for (let i=max; i>=min; i--) {
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}

function filtrarAutos() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo)
    .filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    if(resultado.length) {
        mostrarAutos(resultado)
    } else {
        sinResultado()
    }
}

function sinResultado() {
    limpiarHTML()
    const sinResultado = document.createElement('div')
    sinResultado.classList.add('alerta','error')
    sinResultado.textContent = 'No hay resultados'
    resultado.appendChild(sinResultado)
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda
    if(marca) {
        return auto.marca === marca
    } return auto
}

function filtrarYear(auto) {
    const {year} = datosBusqueda
    if(year) {
        return auto.year === year
    } return auto
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda
    if(minimo) {
        return auto.precio >= minimo
    } return auto
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda
    if(maximo) {
        return auto.precio <= maximo
    } return auto
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda
    if(puertas) {
        return auto.puertas === puertas
    } return auto
}

function filtrarTransmision(auto) {
    const {puertas} = datosBusqueda
    if(puertas) {
        return auto.puertas === puertas
    } return auto
}

function filtrarColor(auto) {
    const {color} = datosBusqueda
    if(color) {
        return auto.color === color
    } return auto
}