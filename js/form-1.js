var form = document.getElementById("getStarted")
var firstNameInput = document.getElementById("firstName")
var surnameInput = document.getElementById("surname")
var numberInput = document.getElementById("number")

// Function to automatically capitalize the first letter as you type and allow only letters
function autoCapitalizeAndLettersOnly(inputElement) {
  inputElement.addEventListener("input", function(event) {
    var inputValue = inputElement.value
    
    // Capitalize the first letter and allow only letters
    var capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    capitalizedValue = capitalizedValue.replace(/[^a-zA-ZÀ-ÿĀ-žЀ-ԯא-תא-ת]/g, '')

    inputElement.value = capitalizedValue // Update the input value with the changes
  })
}

// Attach the auto-capitalization and letters-only function to first name and surname inputs
autoCapitalizeAndLettersOnly(firstNameInput)
autoCapitalizeAndLettersOnly(surnameInput)

// Listen for the form's submit event
form.addEventListener("submit", function(event) {
  event.preventDefault() // Prevent the default form submission

  // Get values from input fields and other form elements
  var firstName = firstNameInput.value
  var surname = surnameInput.value
  var phoneNumber = numberInput.value
  var monthlySubscription = document.getElementById("monthly")
  var yearlySubscription = document.getElementById("yearly")

  var phoneNumberPattern = /^\d{7,15}$/; // Checks if phone number has 7 to 15 digits

  // Check for validation errors
  if (firstName === "") {
    alert("Please enter your First Name.")
  } else if (surname === "") {
    alert("Please enter your Last Name.")
  } else if (!phoneNumberPattern.test(phoneNumber)) {
    alert("Phone Number must have 7 to 15 digits.")
  } else if (!monthlySubscription.checked && !yearlySubscription.checked) {
    alert("Please select a subscription type")
  } else {
    // If no validation errors, reset the form
    form.reset()

    // Create a container to display the submitted information
    var submissionInfo = document.createElement("div")
    submissionInfo.innerHTML =
      "<br><p>First Name: <b>" + firstName + "</b></p><br>" +
      "<p>Last Name: <b>" + surname + "</b></p><br>" +
      "<p>Phone Number: <b>" + phoneNumber + "</b></p><br>" +
      "<p>Subscription Type: <b>" + (monthlySubscription.checked ? "Monthly" : "Yearly") + "</b></p> <br><br>" +
      "<h3>Thank you for submitting!</h3><br> <h2>You are definitely not getting hacked :)</h2>"

    // Replace the form content with the submissionInfo
    form.innerHTML = submissionInfo.innerHTML
  }
})