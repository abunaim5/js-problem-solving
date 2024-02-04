// Write a function to convert temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}
const celsius = 29;
const result = celsiusToFahrenheit(celsius);
console.log(result, 'F.');