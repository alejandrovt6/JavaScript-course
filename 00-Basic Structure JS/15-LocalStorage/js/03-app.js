
// Borrar
localStorage.removeItem('nombre')

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'))

mesesArray.push('Abril')
console.log(mesesArray)
localStorage.setItem('meses', JSON.stringify(mesesArray))

// Limpiar localStorage:
localStorage.clear()