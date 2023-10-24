"use strict"

function main()
{
    displayMailingLabel("Micah Kashiwabara", "19221 N Pierson Rd.", "Sun City", "AZ", "85373");
    displayMailingLabel("Anya Forger", "128 Park Avenue", "Spy City", "Westalis", "007");
    
    addNumbers(10,12);
    addNumbers(6,98);

    console.log("");

    displayReceipt(98, 103);
    displayReceipt(96, 96);
    displayReceipt(101, 100);
}

function displayMailingLabel(name, address, city, state, zip)
{
    console.log(name);
    console.log(`${address}, ${city}, ${state} ${zip}`);
    console.log("")
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
    console.log("")
}


main();