"use strict"

function parseAndDisplayName(fullName)
{
    let end = fullName.indexOf(" ");
    let firstName = fullName.substring(0, end);
    let lastName = fullName.substring(end + 1);
    
    
    console.log("Name: " + fullName);
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("\n");
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");


