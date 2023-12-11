const notificarBtn = document.querySelector('#notificar')

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log('El resultao es ', resultado)
        })
})

const verNotificacion = document.querySelector('#verNotificacion')

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') { // otorgado
        new Notification('Esta es la notificación')
    }
})
