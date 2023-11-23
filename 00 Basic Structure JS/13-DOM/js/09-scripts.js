const primero = document.querySelector('a')
primero.remove()
console.log(primero)

const navegacion = document.querySelector('.navegacion')
console.log(navegacion.children)
navegacion.removeChild(navegacion.children[2])