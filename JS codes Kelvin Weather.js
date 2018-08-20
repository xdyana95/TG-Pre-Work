//This is the temperature in Kelvin
const kelvin = 0;
//This is the converting the temperature to celcius
const celcius = kelvin - 273;
//This is converting the temperature to fahrenheit
let fahrenheit = celcius * (9/5) + 32;
//This rounds down fahrenheit to a whole number
fahrenheit = Math.floor(fahrenheit);
//This converts the temprerature to newton
let newton = celcius * (33/100)
//This rounds down newton to a whole number
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
