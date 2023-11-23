const cash = 300
const card = 400
const available = cash + card
const total = 600

if(cash >= total || card >= total || available >= total) {
    console.log('You can buy')
} else {
    console.log('You cant buy')
}