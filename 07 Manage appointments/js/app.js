//  campos user
const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

// UI
const formulario = document.querySelector('#nueva-cita')
formulario.addEventListener('submit', nuevaCita)    

const contenedorCitas = document.querySelector('#citas')

let editando

// clases
class Citas {
    constructor() {
        this.citas = []
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita]
        console.log(this.citas)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id)
    }

    editarCita(citaNueva) {
        this.citas = this.citas.map(cita => cita.id === citaNueva.id ? citaNueva : cita)
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center','alert','d-block','col-12')

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        divMensaje.textContent = mensaje

        // agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'))
        
        setTimeout( () => {
            divMensaje.remove()
        }, 2500)
    }

    imprimirCitas({citas}) { // destructuring

        this.limpiarHTML()
        
        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita
            const divCita = document.createElement('div')
            divCita.classList.add('cita','p-3')
            divCita.dataset.id = id

            // scripting de elementos
            const mascotaParrafo = document.createElement('h2')
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder')
            mascotaParrafo.textContent = mascota

            const propietarioParrafo = document.createElement('p')
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p')
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Teléfono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p')
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('p')
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p')
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Síntomas: </span> ${sintomas}
            `;

            const idParrafo = document.createElement('p')
            idParrafo.innerHTML = `
                <span class="font-weight-bolder">Id: </span> ${id}
            `;

            // botón eliminar
            const btnEliminar = document.createElement('button')
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2')
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            btnEliminar.onclick = () => eliminarCita(id)

            // botón editar
            const btnEditar = document.createElement('button')
            btnEditar.classList.add('btn', 'btn-info', 'mr-2')
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            btnEditar.onclick = () => cargarEdicion(cita)



            // agregar párrafos
            divCita.appendChild(mascotaParrafo)
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(fechaParrafo)
            divCita.appendChild(horaParrafo)
            divCita.appendChild(sintomasParrafo)
            divCita.appendChild(idParrafo)

            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            // agregar citas a HTML
            contenedorCitas.appendChild(divCita)
        })
    }

    limpiarHTML() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }
}

const ui = new UI()
const administrarCitas = new Citas()
 
eventListeners()

function eventListeners() {
    mascotaInput.addEventListener('change', datosCita)
    propietarioInput.addEventListener('change', datosCita)
    telefonoInput.addEventListener('change', datosCita)
    fechaInput.addEventListener('change', datosCita)
    horaInput.addEventListener('change', datosCita)
    sintomasInput.addEventListener('change', datosCita)
}

// info cita
const citaObj = {
    mascota: '',  // propiedades name
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// agregar datos a citaObj
function datosCita(e) {
    citaObj[e.target.name] = e.target.value
    console.log(citaObj);
}

// validar y agregar cita
function nuevaCita(e) { 
    e.preventDefault()

    // extraer info
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj

    // validar
    if( mascota === '' || propietario === '' || telefono === '' || fecha === ''  || hora === '' || sintomas === '' ) {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')
        return;
    } 
    // else { ui.imprimirAlerta('Cita agregada') }

    if (editando) {
        ui.imprimirAlerta('Editado correctamente')

        administrarCitas.editarCita({...citaObj})

        formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios'

        editando = false

    } else {
        // generar id único
        citaObj.id = Date.now()

        administrarCitas.agregarCita({...citaObj})

        // mensaje
        ui.imprimirAlerta('Agregada correctamente')
    }



    reiniciarObjeto()

    formulario.reset()

    // mostrar HTML de citas
    ui.imprimirCitas(administrarCitas)
}

function reiniciarObjeto() {
    citaObj.mascota = ''
    citaObj.propietario = ''
    citaObj.telefono = ''
    citaObj.fecha = ''
    citaObj.hora = ''
    citaObj.sintomas = ''
}

function eliminarCita(id) {
    // eliminar cita
    administrarCitas.eliminarCita(id)
    // mostrar mensaje
    ui.imprimirAlerta('Cita eliminada correctamente')
    // refrescar citas
    ui.imprimirCitas(administrarCitas)
}

function cargarEdicion(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita

    // llenar inputs
    mascotaInput.value = mascota
    propietarioInput.value = propietario
    telefonoInput.value = telefono
    fechaInput.value = fecha
    horaInput.value = hora
    sintomasInput.value = sintomas

    // llenar objeto
    citaObj.mascota = mascota
    citaObj.propietario = propietario
    citaObj.telefono = telefono
    citaObj.fecha = fecha
    citaObj.hora = hora
    citaObj.sintomas = sintomas
    citaObj.id = id // porque estamos en modo edición
    

    // cambiar botón
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios'
    
    editando = true
}