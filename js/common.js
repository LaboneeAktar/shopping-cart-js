function getTextElementById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    //calculate total
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementById('sub-total', currentSubTotal);

    //calculate tax
    const currentTaxString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(currentTaxString);
    setTextElementById('tax-amount', taxAmount);

    const finalTotal = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalTotal);

}