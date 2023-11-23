const nav = document.querySelector('.navegacion')

nav.addEventListener('click', () => {
    console.log('click en nav')
})

nav.addEventListener('dblclick', () => {
    console.log('doble click en nav')
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando en nav')
    nav.style.backgroundColor = 'red'
})

nav.addEventListener('mouseout', () => {
    console.log('saliendo de nav')
    nav.style.backgroundColor = 'transparent'
})

