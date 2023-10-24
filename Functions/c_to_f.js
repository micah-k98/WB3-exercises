"use strict"

function main()
{
    let currentTemp = 100;
    let fahrenheitTemp = convertCtoF(currentTemp);
    console.log(`${currentTemp}C == ${fahrenheitTemp}F`);

    currentTemp = 45;
    fahrenheitTemp = convertCtoF(currentTemp);
    console.log(`${currentTemp}C == ${fahrenheitTemp}F`);

    currentTemp = 19;
    fahrenheitTemp = convertCtoF(currentTemp);
    console.log(`${currentTemp}C == ${fahrenheitTemp}F`);

    currentTemp = 0;
    fahrenheitTemp = convertCtoF(currentTemp);
    console.log(`${currentTemp}C == ${fahrenheitTemp}F`);
    
    currentTemp = -7;
    fahrenheitTemp = convertCtoF(currentTemp);
    console.log(`${currentTemp}C == ${fahrenheitTemp}F`);

    currentTemp = -40;
    fahrenheitTemp = convertCtoF(currentTemp);
    console.log(`${currentTemp}C == ${fahrenheitTemp}F`);
}


function convertCtoF(celsiusTemp)
{
    return parseFloat(((9 / 5) * celsiusTemp + 32).toFixed(2));
}

main()