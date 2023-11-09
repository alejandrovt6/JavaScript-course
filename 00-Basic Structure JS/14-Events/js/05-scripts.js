window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY;
    // console.log(scrollPX)

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect() // te dice la ubicación de un elemento

    if (ubicacion.top < 784) {
        console.log('elemento visible')
    } else {
        console.log('sigue haciendo scroll')
    }
})