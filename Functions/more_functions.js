"use strict"

function main()
{
    
    
}

function displayMailingLabel(name, address, city, state, zip)
{
    console.log(name);
    console.log(`${address}, ${city}, ${state} ${zip}`);
}

function addNumbers(num1, num2)
{
    let answer = num1 + num2;
    console.log(`${num1} + ${num2} = ${answer}`);
}

function displayReceipt(totalDue, amountPaid)
{
    let changeDue = parseFloat((amountPaid - totalDue).toFixed(2));

    console.log("Total Due:   $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);
    console.log("Change Due:  $" + changeDue);
}



main();