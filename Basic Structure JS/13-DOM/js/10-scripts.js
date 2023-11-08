const enlace = document.createElement('a')

// añadir texto
enlace.textContent = 'Nuevo enlace'

// añadir href
enlace.href = '/nuevo-enlace'

// añadir atributos
enlace.target = '_blank'
enlace.setAttribute('data-enlace', 'nuevo-enlace')

// seleccionar navegacion
const navegacion = document.querySelector('.navegacion')
// navegacion.appendChild(enlace) // al final
navegacion.insertBefore(enlace, navegacion.children[1]) // antes de

// agregar clase
enlace.classList.add('una-clase')

enlace.onclick = miFuncion

function miFuncion() {
    alert('hiciste click')
}

console.log(enlace)


// crear un card
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$800 por persona'
parrafo3.classList.add('precio')

// crear div
const info = document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// crear imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'
// imagen.alt = 'Texto alternativo'

//crear card
const card = document.createElement('div')
card.classList.add('card')

// asignar imagen
card.appendChild(imagen)

// asignar info
card.appendChild(info)

// agregar info a card

// insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)
