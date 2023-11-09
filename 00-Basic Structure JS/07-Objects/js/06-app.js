const product = {
    name: 'TV 20 inch',
    price: 300,
    available: false,
    info: {
        measurements: {
            weight: '1kg',
            height: '1m'
        },
        fabrication: {
            country: 'China'
        }
    }
}

const { info: { measurements } } = product
console.log(measurements)

const { info: { measurements: { weight } } } = product
console.log(weight)

    