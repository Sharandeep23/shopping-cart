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

// Delete Button Event Handler (Phone)
document.getElementById("deleteBtn").addEventListener("click", () => {
  // Hiding the first row
  document.getElementsByClassName("cart-item")[0].style.display = "none";

  // Resting the Update Total Section
  document.getElementById("priceOfPhone").innerText = 0;
  updateTotal();
});

// Plus Button2 Event Handler (Case)
document.getElementById("plusBtn2").addEventListener("click", () => {
  incrementNumber("numOfCase");
  updatePrice("numOfCase", "priceOfCase", initialCasePrice);

  // Update price for subtotal, vat and total
  updateTotal();
});

// Delete Button2 Event Handler (Case)
document.getElementById("deleteBtn2").addEventListener("click", () => {
  // Hiding the first row
  document.getElementsByClassName("cart-item")[1].style.display = "none";

  // Resting the Update Total Section
  document.getElementById("priceOfCase").innerText = 0;
  updateTotal();
});

// Minus Button2 Event Handler (Case)
document.getElementById("minusBtn2").addEventListener("click", () => {
  decrementNumber("numOfCase");
  updatePrice("numOfCase", "priceOfCase", initialCasePrice);

  // Update price for subtotal, vat and total
  updateTotal();
});

// Checkout Button Event Handler
document.getElementById("checkout").addEventListener("click", () => {
  // If total value is larger than 0
  if (parseInt(document.getElementById("total").innerText) > 0) {
    document.getElementsByTagName("section")[0].style.display = "none";
    document.getElementById("after-checkout").style.display = "block";
  }
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
