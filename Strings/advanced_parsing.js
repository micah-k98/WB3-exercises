"use strict"

function parseAndDisplayName(givenName)
{
    let end = givenName.indexOf(" ");
    let end2 = givenName.lastIndexOf(" ");
    let firstName = givenName.substring(0, end);
    let middleName = givenName.substring(end + 1, end2);
    let lastName = givenName.substring(end2 + 1);

    if (end == -1)
    {
        onlyName(givenName);
    }
    else if (end != -1 && end2 == end)
    {
        firstAndLastName(givenName, firstName, lastName);
    }
    
}

function onlyName(givenName)
{
    console.log("Name: " + givenName);
    console.log("Only Name: " + givenName);
}

function firstAndLastName(givenName, firstName, lastName)
{
    console.log("Name: " + givenName);
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
}



parseAndDisplayName("Cher Auston");
// parseAndDisplayName("Ian Auston");
// parseAndDisplayName("Siddalee Grace");


