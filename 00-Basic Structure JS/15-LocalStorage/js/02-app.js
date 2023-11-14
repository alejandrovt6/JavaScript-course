const nombre = localStorage.getItem('nombre')
console.log(nombre)

// Convertir un string a un array/objeto si tiene su forma adecuada:
const productoJSON = localStorage.getItem('producto')
console.log(JSON.parse(productoJSON))

const meses = localStorage.getItem('meses')
const mesesArray = JSON.parse(meses)
console.log(mesesArray)