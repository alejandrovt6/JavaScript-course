// arrays destructuring 
const nums = [10,20,30,40,50]

const [first, two, num3] = nums

console.log(first)
console.log(two)
console.log(num3)


const count = [1,2,3,4,5]

const [ , , three, ...rest] = count

console.log(three)
console.log(rest)