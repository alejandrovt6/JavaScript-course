// Generators

function *createGenerator() {
    yield 1;
    yield 'Name';
    yield 3 +3;
    yield true;
}
const iterator1 = createGenerator();

console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);

function *newGenerator(cart) {
    for( let i = 0; i < cart.length; i++) {
        yield cart[i];
    }
}

console.log('*******************')

const cart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

let iterator2 = newGenerator(cart);

console.log(iterator2.next() );
console.log(iterator2.next() );
console.log(iterator2.next() );
console.log(iterator2.next() );
console.log(iterator2.next() );