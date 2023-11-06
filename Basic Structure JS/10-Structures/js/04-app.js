const cash = 300
const card = false
const totalPay = 500

if(cash >= totalPay) {
    console.log('You can pay')
} else if (card == true) {
    console.log('You can pay with card')
} else {
    console.log('Insufficient funds')
}