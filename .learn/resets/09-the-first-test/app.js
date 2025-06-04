// Tasas de cambio basadas en 1 Euro
let oneEuroIs = {
    "JPY": 156.5,  
    "USD": 1.07,   
    "GBP": 0.87    
};

// Euro a Dolar
function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

// Dolar a Yen
function fromDollarToYen(dollars) {
    // Paso 1: convertir de USD a EUR
    let euros = dollars / oneEuroIs["USD"];
    // Paso 2: convertir de EUR a JPY
    return euros * oneEuroIs["JPY"];
}

//Yen a Libra Esterlina
function fromYenToPound(yen) {
    // Paso 1: convertir de JPY a EUR
    let euros = yen / oneEuroIs["JPY"];
    // Paso 2: convertir de EUR a GBP
    return euros * oneEuroIs["GBP"];
}