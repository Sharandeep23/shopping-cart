// Setting Up Initial Prices
const initialPhonePrice = parseInt(document.getElementById("priceOfPhone").innerText);
const initialCasePrice = parseInt(document.getElementById("priceOfCase").innerText);
const taxRate = 0.15;

// Plus Button Event Handler (Phone)
document.getElementById("plusBtn").addEventListener("click", () => {
    incrementNumber("numOfPhone");
    updatePrice("numOfPhone", "priceOfPhone", initialPhonePrice);

    // Update price for subtotal, vat and total
    updateTotal();
});

// Minus Button Event Handler (Phone)
document.getElementById("minusBtn").addEventListener("click", () => {
    decrementNumber("numOfPhone");
    updatePrice("numOfPhone", "priceOfPhone", initialPhonePrice);

    // Update price for subtotal, vat and total
    updateTotal();
});

// Plus Button2 Event Handler (Case)
document.getElementById("minusBtn2").addEventListener("click", () => {
    decrementNumber("numOfCase");
    updatePrice("numOfCase", "priceOfCase", initialCasePrice);

    // Update price for subtotal, vat and total
    updateTotal();
});

document.getElementById("plusBtn2").addEventListener("click", () => {
    incrementNumber("numOfCase");
    updatePrice("numOfCase", "priceOfCase", initialCasePrice);

    // Update price for subtotal, vat and total
    updateTotal();
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

// As the function does exactly same thing for every element we made it static
function updateTotal() {
    let priceOfPhone = parseInt(document.getElementById("priceOfPhone").innerText);
    let priceOfCase = parseInt(document.getElementById("priceOfCase").innerText);
    // Removing the decimal point
    let tax = Math.floor((priceOfPhone + priceOfCase) * taxRate);

    document.getElementById("subtotal").innerText = priceOfPhone + priceOfCase;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = priceOfPhone + priceOfCase + tax;
}
