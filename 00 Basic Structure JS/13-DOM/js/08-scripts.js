const navegacion = document.querySelector('.navegacion')

// console.log(navegacion)
console.log(navegacion.firstElementChild)
console.log(navegacion.lastElementChild)

// console.log(navegacion.childNodes) // espacios en blanco son elementos
// console.log(navegacion.children) // solo elementos reales

// console.log(navegacion.children[1].nodeName)
// console.log(navegacion.children[1].nodeType)

// TRAVERSING THE DOM
const card = document.querySelector('.card')
// console.log(card.children[1].children[1].textContent)

// card.children[1].children[1].textContent = 'Nuevo heading desde Traversing the DOM'
// console.log(card.children[1].children[1].textContent)

// card.children[0].src = 'img/hacer2.jpg'


// console.log(card.children[0])

// Traversing de hijo a padre
// console.log(card.parentNode)
// console.log(card.parentElement.parentElement)

console.log(card)
console.log(card.nextElementSibling)
console.log(card.previousSibling)

const ultimoCard = document.querySelector('.card:nth-child(4)')
const ultimoCard2 = document.querySelector('.card:last-of-type');

console.log(ultimoCard.previousElementSibling)