"use strict"

function displayOutput(currentTemp)
{
    let celsiusTemp = convertFtoC(currentTemp);
    console.log(`${currentTemp}F == ${celsiusTemp}C`);
}

function convertFtoC(fahrenheitTemp)
{
    return parseFloat(((fahrenheitTemp - 32) * (5 / 9)).toFixed(2));
}

displayOutput(212);
displayOutput(90);
displayOutput(72);
displayOutput(32);
displayOutput(0);
displayOutput(-40);