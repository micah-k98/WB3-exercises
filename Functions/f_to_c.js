"use strict"

function main()
{
    let currentTemp = 212;
    let celsiusTemp = convertFtoC(currentTemp);
    console.log(`${currentTemp}F == ${celsiusTemp}C`);

    currentTemp = 90;
    celsiusTemp = convertFtoC(currentTemp);
    console.log(`${currentTemp}F == ${celsiusTemp}C`);

    currentTemp = 72;
    celsiusTemp = convertFtoC(currentTemp);
    console.log(`${currentTemp}F == ${celsiusTemp}C`);
    
    currentTemp = 32;
    celsiusTemp = convertFtoC(currentTemp);
    console.log(`${currentTemp}F == ${celsiusTemp}C`);

    currentTemp = 0;
    celsiusTemp = convertFtoC(currentTemp);
    console.log(`${currentTemp}F == ${celsiusTemp}C`);

    currentTemp = -40;
    celsiusTemp = convertFtoC(currentTemp);
    console.log(`${currentTemp}F == ${celsiusTemp}C`);
}

function convertFtoC(fahrenheitTemp)
{
    return parseFloat(((fahrenheitTemp - 32) * (5 / 9)).toFixed(2));
}

main();