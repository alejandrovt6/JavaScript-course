new Date().toLocaleDateString()
new Date().toLocaleTimeString()
new Date().toLocaleString()


const isToday = new Date()

moment.locale('en') // languaje
console.log(moment().format('DD MMMM YYYY h:mm:ss'))
console.log(moment().format('DD MM YYYY h:mm:ss A')) // A : pm or am

console.log(moment().format('LLLL', isToday))
console.log(moment().add(3, 'days').calendar())