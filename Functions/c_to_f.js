"use strict"

function displayOutput(currentTemp)
{
    let fahrenheitTemp = convertCtoF(currentTemp);
    console.log(`${currentTemp}C == ${fahrenheitTemp}F`);
}


function convertCtoF(celsiusTemp)
{
    return parseFloat(((9 / 5) * celsiusTemp + 32).toFixed(2));
}

displayOutput(100);
displayOutput(45);
displayOutput(19);
displayOutput(0);
displayOutput(-7);
displayOutput(-40);