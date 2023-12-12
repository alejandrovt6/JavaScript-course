const countries = []

function newCountry(country, callback) {
    countries.push(country)
    console.log(`${country} added`)
    callback()
}

function showCountries() {
    console.log(countries)
}

function initCallbackHell() {
    setTimeout(() => {
        newCountry('Germany', showCountries)
        setTimeout(() => {
            newCountry('France', showCountries)
            setTimeout(() => {
                newCountry('Sweeden', showCountries)
            }, 1000);
        }, 1000);  
    }, 1000);
}

initCallbackHell()