let Fahrenheit = 49;
//temp right now
let fahrenheitToCelsius = (Fahrenheit - 32) / 1.8;
let fahrenheitToKelvin = (Fahrenheit + 459.67) / 1.8;
//formula for temp converter
console.log( "Fahrenheit: " + Fahrenheit);
console.log("Celsius:"  + (Math.floor(fahrenheitToCelsius)));
console.log( "Kelvin: " + (Math.floor(fahrenheitToKelvin)));
//prints all temps rounded down
