startingApp()

function startingApp() {
    console.log('Starting app...')
    secondFunct()
}

function secondFunct() {
    console.log('Second function')
    userAuthenticated('Alejandro')

}

function userAuthenticated(user) {
    console.log('Authenticating user...')
    console.log(`User authenticated correctly: ${user}`)
}