"use strict";

var form1 = document.getElementById("getStarted");
var form2 = document.getElementById("contact-us");

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

// Attach the auto-capitalization and letters-only function to first name and surname inputs for form1
var firstNameInput1 = document.getElementById("firstName");
var surnameInput1 = document.getElementById("surname");
var numberInput1 = document.getElementById("number"); // Add this line for the first form
autoCapitalizeAndLettersOnly(firstNameInput1);
autoCapitalizeAndLettersOnly(surnameInput1);

// Attach the auto-capitalization and letters-only function to first name and last name inputs for form2
var firstNameInput2 = document.getElementById("firstName2");
var lastNameInput2 = document.getElementById("lastName");
var numberInput2 = document.getElementById("number2"); // Add this line for the second form
autoCapitalizeAndLettersOnly(firstNameInput2);
autoCapitalizeAndLettersOnly(lastNameInput2);

var phoneNumberPattern = /^\d{7,15}$/; // Checks if phone number has 7 to 15 digits

// Listen for the form1's submit event
form1.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get values from input fields and other form elements for form1
  var firstName = firstNameInput1.value;
  var surname = surnameInput1.value;
  var phoneNumber = numberInput1.value; // Use the correct input element for form1
  var monthlySubscription = document.getElementById("monthly");
  var yearlySubscription = document.getElementById("yearly");

  // Check for validation errors for form1
  if (firstName === "") {
    alert("Please enter your First Name.");
  } else if (surname === "") {
    alert("Please enter your Last Name.");
  } else if (!phoneNumberPattern.test(phoneNumber)) {
    alert("Phone Number must have 7 to 15 digits.");
  } else if (!monthlySubscription.checked && !yearlySubscription.checked) {
    alert("Please select a subscription type");
  } else {
    // If no validation errors, reset the form1
    form1.reset();

    // Create a container to display the submitted information for form1
    var submissionInfo = document.createElement("div");
    submissionInfo.innerHTML =
      "<br><p>First Name: <b>" + firstName + "</b></p><br>" +
      "<p>Last Name: <b>" + surname + "</b></p><br>" +
      "<p>Phone Number: <b>" + phoneNumber + "</b></p><br>" +
      "<p>Subscription Type: <b>" + (monthlySubscription.checked ? "Monthly" : "Yearly") + "</b></p> <br><br>" +
      "<h3>Thank you for submitting!</h3><br>";

    // Replace the content of form1 with the submissionInfo for form1
    form1.innerHTML = submissionInfo.innerHTML;
  }
});

// Listen for the form2's submit event
form2.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get values from input fields and other form elements for form2
  var firstName = firstNameInput2.value;
  var lastName = lastNameInput2.value;
  var phoneNumber = numberInput2.value; // Use the correct input element for form2
  var personalRadio = document.getElementById("personal");
  var companyRadio = document.getElementById("company");

  // Check for validation errors for form2
  if (firstName === "") {
    alert("Please enter your First Name.");
  } else if (lastName === "") {
    alert("Please enter your Last Name.");
  } else if (!phoneNumberPattern.test(phoneNumber)) {
    alert("Phone Number must have 7 to 15 digits.");
  } else if (!personalRadio.checked && !companyRadio.checked) {
    alert("Please select a type (Personal/Company).");
  } else {
    // If no validation errors, reset the form2
    form2.reset();

    // Create a container to display the submitted information for form2
    var submissionInfo = document.createElement("div");
    submissionInfo.innerHTML =
      "<h2>We have received your information, we will contact you as soon as possible.<br><br> Have a nice day :)</h2>";

    // Replace the content of form2 with the submissionInfo for form2
    form2.innerHTML = submissionInfo.innerHTML;
  }
});
