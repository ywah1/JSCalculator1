// Initalize variable to store the current input value
let inputValue = "";

// Function to add the specified value to the input and update the display
function toDisplay(value) {
  if (value === "^") {
    inputValue += "**"; // Append '**' for exponentiation
  } else {
    inputValue += value; // Concatenate the value to the current input
  }
  document.getElementById("display").value = inputValue; // Update the display with the current input value
}

function backSpace() {
    inputValue = inputValue.slice(0, -1); // Remove the last character
    document.getElementById("display").value = inputValue;
}

// Function to clear the input and display
function clearInput() {
  inputValue = ""; // Reset the current input
  document.getElementById("display").value = ""; // Clear the display
}

// Function to perform the calculation based on the input value
function calculate() {
  try {
    // Replace '^' with '**' for exponentiation in the input value
    let modifiedInput = inputValue.replace(/\^/g, "**");
    let result = eval(modifiedInput); // Evaluate the modified input value as an expression
    document.getElementById("display").value = result; // Update the display with the result
    inputValue = result.toString(); // Update the current input with the result
  } catch (error) {
    document.getElementById("display").value = "Error"; // Display "Error" if an error occurs during calculation
    inputValue = ""; // Reset the current input
  }
}




