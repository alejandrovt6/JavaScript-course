const authenticated = false
const canPay = false

// ternary operator
console.log(authenticated  && canPay ? 'You are authenticated' : 'You are not authenticated')

console.log(authenticated  ? canPay ? 'You are authenticated and can pay' : 'You are authenticated, but not can pay' : 'You are not authenticated')

// ? -> if 
// : -> else