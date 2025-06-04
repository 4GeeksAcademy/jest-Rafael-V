// Función de suma que se usa en los tests
function sum(a, b) {
    return a + b;
}


let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// Dólar a Yen
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"];     
    return euros * oneEuroIs["JPY"];            
}

// Yen a Libra Esterlina
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"];         
    return euros * oneEuroIs["GBP"];            
}


module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound,
    sum  
};
