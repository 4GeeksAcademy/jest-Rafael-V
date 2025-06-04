// Tasas de cambio basadas en 1 Euro
let oneEuroIs = {
    "JPY": 156.5,  
    "USD": 1.07,   
    "GBP": 0.87    
};

// Euro a Dólar
function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

// Dólar a Yen
function fromDollarToYen(dollars) {
    // convertir de USD a EUR
    let euros = dollars / oneEuroIs["USD"];
    // convertir de EUR a JPY
    return euros * oneEuroIs["JPY"];
}

// Yen a Libra Esterlina
function fromYenToPound(yen) {
    // convertir de JPY a EUR
    let euros = yen / oneEuroIs["JPY"];
    // convertir de EUR a GBP
    return euros * oneEuroIs["GBP"];
}

// Exportamos las funciones para usarlas en test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
