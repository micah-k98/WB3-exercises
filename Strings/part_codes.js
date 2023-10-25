"use strict"

function enteredData(partCode)
{
    let colon = partCode.indexOf(":");
    let dash = partCode.indexOf("-");
    let supplier = getSupplier(partCode, colon);
    let productName = getProductNumber(partCode, colon, dash);
    let size = getSize(partCode, dash);
    display(partCode, supplier, productName, size);
}

function getSupplier(code, colon)
{
    let supplier = code.substring(0, colon);
    return supplier;
}

function getProductNumber(code, colon, dash)
{
    let productNumber = code.substring(colon + 1, dash);
    return productNumber;
}

function getSize(code, dash)
{
    let size = code.substring(dash + 1);
    return size;
}

function display(partCode, supplier, productName, size)
{
    console.log("    " + partCode);
    console.log("Supplier:       " + supplier);
    console.log("Product Number: " + productName);
    console.log("Size:           " + size);
    console.log("\n");
}

enteredData("ACME:123-L");
enteredData("DI:12345-M");
enteredData("ACE:1-12");

