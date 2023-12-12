
const cities = ['London', 'New York', 'Madrid', 'Paris'];
const orders = new Set([123, 231, 131, 102]);
const data = new Map();

data.set('name', 'Ale');
data.set('profession', 'Web developer');

// entries iterator
for( let entry of cities.entries() ){
    console.log(entry);
}

for( let entry of orders.entries() ){
    console.log(entry);
}

for( let entry of data.entries() ){
    console.log(entry);
}

// values iterator
for(let value of cities.values()) {
    console.log(value);
}

for( let value of orders.values() ){
    console.log(value);
}

for( let value of data.values() ){
    console.log(value);
}

// keys iterator
for(let keys of cities.keys() ) {
    console.log(keys);
}

for( let keys of orders.keys()  ){
    console.log(keys);
}

for( let keys of data.keys()  ){
    console.log(keys);
}

// default
for(let ciudad of cities) {
    console.log(ciudad);
}

for( let orden of orders){
    console.log(orden);
}

for( let data2 of data){
    console.log(data2);
}

const msg = 'Learning JavaScript';

for( let i = 0; i < msg.length; i++ ) {
    console.log(msg[i]);
}

for( let letra of msg) {
    console.log(letra);
}

const links = document.getElementsByTagName('a');

for (let link of links) {
    console.log(link.href);
}
   