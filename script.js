// -------------------------------
// Part 1: Variables + Conditionals
// -------------------------------
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = parseInt(document.getElementById("ageInput").value);

  if (isNaN(age)) {
    document.getElementById("ageResult").textContent = "Please enter a valid number!";
  } else if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult.";
  } else {
    document.getElementById("ageResult").textContent = "❌ You are underage.";
  }
});

// -------------------------------
// Part 2: Functions
// -------------------------------
// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format text
function formatMessage(name) {
  return `Hello, ${name}! Welcome to JavaScript 🚀`;
}

// Use functions
document.getElementById("totalBtn").addEventListener("click", function () {
  let total = calculateTotal(20, 3); // Example: price=20, qty=3
  document.getElementById("totalResult").textContent =
    `Total cost = $${total} | ${formatMessage("Student")}`;
});

// -------------------------------
// Part 3: Loops
// -------------------------------
// Example with for loop
document.getElementById("listBtn").addEventListener("click", function () {
  let items = ["Apples", "Bananas", "Cherries", "Dates"];
  let list = document.getElementById("itemList");
  list.innerHTML = ""; // clear old list

  // forEach loop to add list items
  items.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});

// -------------------------------
// Part 4: DOM Manipulation
// -------------------------------
document.getElementById("toggleBtn").addEventListener("click", function () {
  let text = document.getElementById("toggleText");
  text.classList.toggle("highlight");
});

// Another DOM example: change text dynamically
document.getElementById("toggleText").addEventListener("mouseover", function () {
  this.textContent = "👋 You hovered over me!";
});

document.getElementById("toggleText").addEventListener("mouseout", function () {
  this.textContent = "This text can be highlighted 🎨";
});