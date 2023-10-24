"use strict"

function main()
{
    let grossPay = 750;
    let withholdingCode = 0;
    let socSecTax = getSocSecTax(grossPay);
    let medicareTax = getMedicareTax(grossPay);
    let federalTax = getFederalTax(grossPay, withholdingCode);
    console.log(`Person 1:     gross pay $${grossPay}     withholding code ${withholdingCode}`);
    console.log("Social Security Tax: $" + socSecTax);
    console.log("Medicare Tax:        $" + medicareTax);
    console.log("Federal Tax:         $" + federalTax);

    console.log("");

    grossPay = 1550;
    withholdingCode = 2;
    socSecTax = getSocSecTax(grossPay);
    medicareTax = getMedicareTax(grossPay);
    federalTax = getFederalTax(grossPay, withholdingCode);
    console.log(`Person 2:     gross pay $${grossPay}     withholding code ${withholdingCode}`);
    console.log("Social Security Tax: $" + socSecTax);
    console.log("Medicare Tax:        $" + medicareTax);
    console.log("Federal Tax:         $" + federalTax);

    console.log("");

    grossPay = 1100;
    withholdingCode = 6;
    socSecTax = getSocSecTax(grossPay);
    medicareTax = getMedicareTax(grossPay);
    federalTax = getFederalTax(grossPay, withholdingCode);
    console.log(`Person 3:     gross pay $${grossPay}     withholding code ${withholdingCode}`);
    console.log("Social Security Tax: $" + socSecTax);
    console.log("Medicare Tax:        $" + medicareTax);
    console.log("Federal Tax:         $" + federalTax);

}

function getSocSecTax(grossPay)
{
    return parseFloat((grossPay * .062).toFixed(2)) //assume that the tax is 6.2%
}

function getMedicareTax(grossPay)
{
    return parseFloat((grossPay * .0145).toFixed(2)) //assume that the tax is 1.45%
}

function getFederalTax(grossPay, withholdingCode)
{
    let taxRate;
    
    switch(withholdingCode)
    {
        case 0:
            taxRate = .23;
            break;
        case 1:
            taxRate = .21;
            break;
        case 2:
            taxRate = .195;
            break;
        case 3:
            taxRate = .185;
            break;
        case 4:
            taxRate = .18;
            break;
        default:
            taxRate = .18-((withholdingCode-4) * .005);
            break;
    }

    return parseFloat((grossPay * taxRate).toFixed(2)) 
}

main()