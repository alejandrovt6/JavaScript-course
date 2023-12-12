const car = {
    brand: 'Seat',
    year: 2015,
    motor: 1.6
}

for(let property in car) {
    // console.log(property)
    console.log(`${car[property]}`)
}

console.log('******')


for(let property in car) {
    // console.log(property)
    console.log(`${car[property]}`)
}

console.log('******')


for(let [key, value] of Object.entries(car)) {
    console.log(value)
    console.log(key)

}