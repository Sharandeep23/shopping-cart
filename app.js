// Setting Up Initial Prices
const initialPhonePrice = parseInt(document.getElementById("priceOfPhone").innerText);
const initialCasePrice = parseInt(document.getElementById("priceOfCase").innerText);

// Plus Button Event Handler (Phone)
document.getElementById("plusBtn").addEventListener("click", () => {
    incrementNumber("numOfPhone");
    updatePrice("numOfPhone", "priceOfPhone", initialPhonePrice);

    // Update price for subtotal and total
    updatePrice2("subtotal", "priceOfPhone", "priceOfCase");
    updatePrice2("total", "priceOfPhone", "priceOfCase");
});

// Minus Button Event Handler (Phone)
document.getElementById("minusBtn").addEventListener("click", () => {
    decrementNumber("numOfPhone");
    updatePrice("numOfPhone", "priceOfPhone", initialPhonePrice);

    // Update price for subtotal and total
    updatePrice2("subtotal", "priceOfPhone", "priceOfCase");
    updatePrice2("total", "priceOfPhone", "priceOfCase");
});

// Plus Button2 Event Handler (Case)
document.getElementById("minusBtn2").addEventListener("click", () => {
    decrementNumber("numOfCase");
    updatePrice("numOfCase", "priceOfCase", initialCasePrice);

    // Update price for subtotal and total
    updatePrice2("subtotal", "priceOfPhone", "priceOfCase");
    updatePrice2("total", "priceOfPhone", "priceOfCase");
});

document.getElementById("plusBtn2").addEventListener("click", () => {
    incrementNumber("numOfCase");
    updatePrice("numOfCase", "priceOfCase", initialCasePrice);

    // Update price for subtotal and total
    updatePrice2("subtotal", "priceOfPhone", "priceOfCase");
    updatePrice2("total", "priceOfPhone", "priceOfCase");
});

// Utility Functions

function getNumber(id) {
    return parseInt(document.getElementById(id).value);
}

function incrementNumber(id) {
    document.getElementById(id).value = getNumber(id) + 1;
}

function decrementNumber(id) {
    // Quantity should be greater than 0
    if (getNumber(id) - 1 > 0) {
        document.getElementById(id).value = getNumber(id) - 1;
    }
}

function updatePrice(quantityId, priceId, initialPrice) {
    document.getElementById(priceId).innerText = getNumber(quantityId) * initialPrice;
}

function updatePrice2(totalId, phoneId, caseId) {
    let priceOfPhone = parseInt(document.getElementById(phoneId).innerText);
    let priceOfCase = parseInt(document.getElementById(caseId).innerText);

    document.getElementById(totalId).innerText = priceOfPhone + priceOfCase;
}
