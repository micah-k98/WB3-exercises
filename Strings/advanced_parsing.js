"use strict"

function parseAndDisplayName(givenName)
{
    let end = givenName.indexOf(" ");
    switch(end)
    {
        case -1:
            onlyName(givenName);
            break;
        
    }

    
    // let firstName = fullName.substring(0, end);
    // let lastName = fullName.substring(end + 1);
    
}

function onlyName(givenName)
{
    console.log("Name: " + givenName);
    console.log("Only Name: " + givenName);

}

parseAndDisplayName("Cher");
// parseAndDisplayName("Ian Auston");
// parseAndDisplayName("Siddalee Grace");


