const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const months2 = ['August', 'September', 'October'];
const months3 = ['November', 'December']

// concat
const result = months.concat(months2, months3, 'Other month')
console.log(result)

// spread operator
const result2 = [...months, ...months2, ...months3, 'Other month']
console.log(result2)
