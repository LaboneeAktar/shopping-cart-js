/**
 * add event listener to the case plus button
 * get the value inside the case number field (input field)
 * convert the number to an integer
 * calculate the new case number
 * set the value to the case number field
 */

// Without function
/*
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
})
*/

//With function and easy way + not repeate same code
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}


function updateCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    updateCasePrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);

    updateCasePrice(newCaseNumber);
    calculateSubTotal();
})