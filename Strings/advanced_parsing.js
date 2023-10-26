"use strict"

function parseAndDisplayName(givenName)
{
    let end = givenName.indexOf(" ");
    let end2 = givenName.lastIndexOf(" ");
    let firstName = givenName.substring(0, end);
    let middleName = givenName.substring(end + 1, end2);
    let lastName = givenName.substring(end2 + 1);

    console.log("Name: " + givenName);

    if (end == -1)
    {
        onlyName(givenName);
    }
    else if (end != -1 && end2 == end)
    {
        firstAndLastName(givenName, firstName, lastName);
    }
    else
    {
        firstMiddleLastName(givenName, firstName, middleName, lastName);
    }
}

function onlyName(givenName)
{
    console.log("Only Name: " + givenName + "\n");
}

function firstAndLastName(givenName, firstName, lastName)
{
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName + "\n");
}

function firstMiddleLastName(givenName, firstName, middleName, lastName)
{
    console.log("First Name: " + firstName);
    console.log("Middle Name: " + middleName);
    console.log("Last Name: " + lastName + "\n");
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");


