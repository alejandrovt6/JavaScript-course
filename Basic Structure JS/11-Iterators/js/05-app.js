let i = 1

// runs at least once
do {
    if(i % 15 === 0) {
        console.log(`${i} FIZZ BUZZ`)
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if ( i % 5 === 0 ) {
        console.log(`${i} buzz`)
    } 
    i++;
} while (i < 100)