const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('input', (e) => {
    console.log(e.type)
    console.log(e.target.value) // ver lo que se está escribiendo
})

busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...')
})

busqueda.addEventListener('keyup', () => {
    console.log('escribiendo...(2)')
})

busqueda.addEventListener('blur', () => {
    console.log('escribiendo...(3)')
})

busqueda.addEventListener('copy', () => {
    console.log('copiando')
})

busqueda.addEventListener('paste', () => {
    console.log('pegando')
})

busqueda.addEventListener('cut', () => {
    console.log('cortando')
})