"use strict";

var form = document.getElementById("contact-us");
var firstNameInput = document.getElementById("firstName2");
var lastNameInput = document.getElementById("lastName");
var numberInput = document.getElementById("number2");

// Function to automatically capitalize the first letter as you type and allow only letters
function autoCapitalizeAndLettersOnly(inputElement) {
  inputElement.addEventListener("input", function(event) {
    var inputValue = inputElement.value;
    
    // Capitalize the first letter and allow only letters
    var capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    capitalizedValue = capitalizedValue.replace(/[^a-zA-ZÀ-ÿĀ-žЀ-ԯא-תא-ת]/g, '');

    inputElement.value = capitalizedValue; // Update the input value with the changes
  });
}

// Attach the auto-capitalization and letters-only function to first name and last name inputs
autoCapitalizeAndLettersOnly(firstNameInput);
autoCapitalizeAndLettersOnly(lastNameInput);

// Listen for the form's submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get values from input fields and other form elements
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;
  var phoneNumber = numberInput.value;
  var personalRadio = document.getElementById("personal");
  var companyRadio = document.getElementById("company");

  var phoneNumberPattern = /^\d{7,15}$/; // Checks if phone number has 7 to 15 digits

  // Check for validation errors
  if (firstName === "") {
    alert("Please enter your First Name.");
  } else if (lastName === "") {
    alert("Please enter your Last Name.");
  } else if (!phoneNumberPattern.test(phoneNumber)) {
    alert("Phone Number must have 7 to 15 digits.");
  } else if (!personalRadio.checked && !companyRadio.checked) {
    alert("Please select a type (Personal/Company).");
  } else {
    // If no validation errors, reset the form
    form.reset();

    // Create a container to display the submitted information
    var submissionInfo = document.createElement("div");
    submissionInfo.innerHTML =
      "<h2>We have received your information, we will contact you as soon as possible.<br><br> Have a nice day :)</h2>"

    // Replace the content of the form with the submissionInfo
    form.innerHTML = submissionInfo.innerHTML;
  }
});
