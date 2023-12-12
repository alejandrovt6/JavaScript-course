const applyDiscount = new Promise((resolve, reject) => {

    const discount = false

    if(discount) {
        resolve('Discount applied')
    } else {
        reject('Discount could not be applied')
    }
})

applyDiscount
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

function discount(message) {
    console.log(message)
}

// fullfield - se cumplió
// rejected - no se cumplió
// pending - no se sabe si se cumplirá