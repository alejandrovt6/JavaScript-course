const product = {
    name: 'TV 20 inch',
    price: 300,
    available: true,
    showInfo: function() {
        console.log(`Product ${this.name} cost: ${this.price}`) 
    }
}

product.showInfo()