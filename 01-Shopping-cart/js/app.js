const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')

let articulosCarrito = []

cargarEventListeners()

function cargarEventListeners() {
    // al presionar "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso)
    // eliminar cursos
    carrito.addEventListener('click', eliminarCurso)
    // eliminar compra
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []
        carritoHTML()

    })
}

function agregarCurso(e) {
    e.preventDefault()

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

function leerDatosCurso(curso) {
    // crear un objeto con el contenido del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src, // extrae ruta
        titulo: curso.querySelector('h4').textContent, // extrae texto
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), // atributos propios
        cantidad: 1
    }

    // comprobar si elemento existe
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id) // true o false
    
    if (existe) {
        // actualizar cantidad
        const cursos = articulosCarrito.map(curso => { // nuevo array
            if (curso.id === infoCurso.id) {
                curso.cantidad++
                return curso; // obj. actualizado
            } else {
                return curso; // objs. no duplicados
            }
        })
        articulosCarrito = [...cursos]

    } else {
        // añadir a carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    carritoHTML()
}

function carritoHTML () {
    // limpiar HTML
    limpiarHTML()

    // recorre carrito y genera HTML
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id } = curso; // destructuring.  evitamos poner curso.titulo, .precio...
        const row = document.createElement('tr') // dentro del tbody creamos tr
        row.innerHTML =`
            <td> <img src="${imagen}" width="100"> </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>   
            <td> ${cantidad} </td>    
            <td> <a href="#" class="borrar-curso" data-id="${id}"> X </td>   
        `;
        // agrega el HTML del carrito al tbody
        contenedorCarrito.appendChild(row)
    })  
}

function limpiarHTML() {
    // 1ª forma
    // contenedorCarrito.innerHTML = ''
    // 2ª forma
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild) // elimina el primer array
    }
}

function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')

        // eliminar por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId) // trae todos menos el que es id igual 
        carritoHTML()
    }
}
