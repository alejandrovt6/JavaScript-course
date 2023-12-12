document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Está visible')
    } else {
        console.log('No está visible')
    }
})