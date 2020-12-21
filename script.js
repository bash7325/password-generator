// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables defined

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$^&%*()+=-[]{}|:<>?,.'";
var numbers = "1234567890";

//start password generator by clicking button

generateBtn.addEventListener("click", writePassword);

//function for generating random password

function generatePassword() {

  var passwordSet = ("");
  var newPassword = ("");

  var passwordLengthSet = prompt("How long would you like your password to be? HINT: must be between 8 and 128 characters.");
  //set password length, if value is outside parameters or blank return to start
  if (Number(passwordLengthSet < 8) || Number(passwordLengthSet > 128) || isNaN(passwordLengthSet)) {
    alert("Enter a number between 8 and 128");
    return;
  }

  console.log(passwordLengthSet);
  //confirms and if statements for characters and numbers
  var lowerCaseSet = confirm("Include lower case letters? click OK for yes, if no click cancel.");

  if (lowerCaseSet) {
    passwordSet += lowerCase;
  }
  // console.log(lowerCaseSet);
  var upperCaseSet = confirm("Include upper case letters? click OK for yes, if no click cancel.");

  if (upperCaseSet) {
    passwordSet += upperCase;
  }
  // console.log(upperCaseSet);
  var specialSet = confirm("Include special characters? click OK for yes, if no click cancel.");

  if (specialSet) {
    passwordSet += special;
  }
  // console.log(specialSet);
  var numbersSet = confirm("Include numbers? click OK for yes, if no click cancel.");

  if (numbersSet) {
    passwordSet += numbers;
  }
  //if all confirms are no, tell user they must select at least one
  else {
    passwordSet === ("");
    alert("You must select at least one to continue...");
  }
  // console.log(passwordSet);
  //for loop to randomize collected data
  if (Number(passwordLengthSet >= 8) && Number(passwordLengthSet <= 128)) {
    for (var i = 0; i < passwordLengthSet; i++) {
      newPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
      console.log(newPassword);
    }
  }
  return newPassword;
}
  // Function to write password to the text box
  function writePassword() {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  }

