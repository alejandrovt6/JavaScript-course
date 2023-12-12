localStorage.getItem('nombre','Alejandro')
sessionStorage.getItem('nombre','Alejandro')

// LocalStorage: se mantiene todo el tiempo
// SessionStorage: cuando se cierra el navegador, se pierde

// Sólo se pueden almacenar strings

const producto = {
    nombre: 'Monitor 24 inch',
    precio: 300
}

// Pasar de objeto/arrays a string y guardar:
const productoString = JSON.stringify(producto)
console.log(typeof productoString);

localStorage.setItem('producto', productoString)

const meses = ['Enero','Febrero','Marzo']
const mesesString = JSON.stringify(meses)
localStorage.setItem('meses', mesesString)