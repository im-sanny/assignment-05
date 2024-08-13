// decrease total number of seats and add ticket information
const allSmBtn = document.getElementsByClassName("add-btn");
let count = 40; // Total available seats

for (const btn of allSmBtn) {
  btn.addEventListener("click", function (e) {
    // Decrease total number of seats
    count--;
    setInnerText("fortySeats", count);

    // Add button name to tickets container
    const ticketContainer = document.getElementById("selected-container");
    const buttonName = e.target.innerText.trim(); // Get the inner text of the clicked button
    const p = document.createElement("p");
    p.innerText = buttonName;
    ticketContainer.appendChild(p);

    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    ticketContainer.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerText = fare.innerText;
    ticketContainer.appendChild(p3);

    // Increase ticket count
    let seatCount = parseInt(document.getElementById("ticket-seat").innerText);
    seatCount++;
    setInnerText("ticket-seat", seatCount);

    // Calculate total value
    calculateTotal();
  });
}

const ticketContainer = document.getElementsByClassName("add-btn");
for (let i = 0; i < ticketContainer.length; i++) {
  ticketContainer[i].addEventListener("click", function () {
    this.style.backgroundColor = "#1DD100";
  });
}

// Default function to set inner text
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

let seatCount = 0;
for (const btn of allSmBtn) {
  btn.addEventListener("click", function () {
    seatCount += 1;
    setInnerText("ticket-seat", seatCount);
  });
}

// Add event listeners to each button
for (const btn of allSmBtn) {
  btn.addEventListener("click", function () {
    const clickCount = parseInt(this.getAttribute("data-clicks")) || 0; // Get the current click count from data attribute
    if (clickCount >= 1) {
      // If the button has been clicked four or more times, show an alert
      alert("You can't buy one seat twice");

      return; // Exit the function to prevent further execution
    }
    // Increment the click count and update the data attribute
    const updatedClickCount = clickCount + 1;
    this.setAttribute("data-clicks", updatedClickCount);

    // Calculate total value
    calculateTotal();
  });
}

// Function to calculate total value
function calculateTotal() {
  const ticketPrice = parseInt(document.getElementById("fare").innerText);
  const numberOfTickets = parseInt(
    document.getElementById("ticket-seat").innerText
  );
  const totalValue = ticketPrice * numberOfTickets;
  document.getElementById("total-price").innerText = totalValue;
  document.getElementById("grand-total").innerText = totalValue;
}

// Apply coupon functionality
const applyCouponBtn = document.getElementById("apply-coupon-btn");
applyCouponBtn.addEventListener("click", function () {
  const couponCode = document.getElementById("coupon-code").value;
  let discountPercentage = 0;
  if (couponCode === "NEW15") {
    discountPercentage = 15;
    alert("Enjoy your offer");
  } else if (couponCode === "Couple 20") {
    discountPercentage = 20;
    alert("Enjoy your time");
  } else {
    alert("Invalid code");
  }

  if (discountPercentage > 0) {
    document.getElementById("coupon-code").style.button = "none";
  }
  const totalValue = parseInt(document.getElementById("total-price").innerText);
  const discountAmount = (totalValue * discountPercentage) / 100;
  const grandTotal = totalValue - discountAmount;
  document.getElementById("grand-total").innerText = grandTotal;
});

// Validation for Passenger Name
const passengerNameInput = document.getElementById("passenger-name");
// Validation for Phone Number
const phoneNumberInput = document.getElementById("phone-number");
// Validation for Email ID
const emailInput = document.getElementById("email-id");

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function () {
  const passengerName = passengerNameInput.value.trim();
  const phoneNumber = phoneNumberInput.value.trim();
  const email = emailInput.value.trim();

  let isValid = true;

  if (!passengerName.match(/^[a-zA-Z\s]+$/)) {
    alert(
      "Please enter a valid passenger name. Only letters and spaces are allowed."
    );
    passengerNameInput.focus();
    isValid = false;
  }

  if (!phoneNumber.match(/^\d+$/)) {
    alert("Please enter a valid phone number. Only digits are allowed.");
    phoneNumberInput.focus();
    isValid = false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    isValid = false;
  }

  if (isValid) {
    my_modal_1.showModal();
  }
});
