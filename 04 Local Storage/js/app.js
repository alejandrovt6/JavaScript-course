const formuario = document.querySelector('#formulario')
const listaNotas = document.querySelector('#lista-notas')
let notas = []

eventListener()

function eventListener() {
    formuario.addEventListener('submit', agregarNota)

    document.addEventListener('DOMContentLoaded', () => {
        notas = JSON.parse(localStorage.getItem('notas')) || [] // si no hay nada, asigna un array vacío
    })
}

function agregarNota(e) {
    e.preventDefault()

    const nota = document.querySelector('#nota').value

    // Validar nota
    if(nota === '') {
        mostrarError('No puede estar vacío')
        return;
    } 
    const notaObj = {
        id: Date.now(),
        nota // = nota: nota
    }

    notas = [...notas, notaObj]

    crearHTML()
    formuario.reset()
}

function mostrarError(error) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error
    mensajeError.classList.add('error')

    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    setTimeout(() => {
        mensajeError.remove();
    }, 3000)
}

function crearHTML() {

    limpiarHTML()

    if(notas.length > 0) {
        notas.forEach(nota => {

            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-nota')
            btnEliminar.innerText = 'X'

            btnEliminar.onclick = () => {
                eliminarNota(nota.id)
            }

            const lista = document.createElement('li')
            lista.innerText = nota.nota
            lista.appendChild(btnEliminar)
            listaNotas.appendChild(lista)
        })
    }
    sincronizarStorage()
}

function limpiarHTML() {
    while(listaNotas.firstChild) {
        listaNotas.removeChild(listaNotas.firstChild)
    }
}

function sincronizarStorage() {
    localStorage.setItem('notas', JSON.stringify(notas))
}

function eliminarNota(id) {
    notas = notas.filter(nota => nota.id !== id)
    crearHTML()
}