const user = true
const canPay = true

if(user && canPay) {
    console.log('You can buy')
} else if(!user && !canPay) {
    console.log('You cant buy')
} else if(!user) {
    console.log('Start your session or register')
} else if(!canPay) {
    console.log('Insufficients funds')
}