
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$^&%*()+=-[]{}|:<>?,.'";
var numbers = "1234567890";

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordSet = "";
  var newPassword = "";

  var passwordLengthSet = prompt("How long would you like your password to be? HINT: must be between 8 and 128 characters.");
  if (Number(passwordLengthSet < 8) || Number(passwordLengthSet > 128) || isNaN(passwordLengthSet)) {
    alert("Enter a number between 8 and 128");
    return;
  }

  var lowerCaseSet = confirm("Include lower case letters? click OK for yes, if no click cancel.");

  if (lowerCaseSet) {
    passwordSet += lowerCase;
  }

  var upperCaseSet = confirm("Include upper case letters? click OK for yes, if no click cancel.");

  if (upperCaseSet) {
    passwordSet += upperCase;
  }

  var specialSet = confirm("Include special characters? click OK for yes, if no click cancel.");

  if (specialSet) {
    passwordSet += special;
  }

  var numbersSet = confirm("Include numbers? click OK for yes, if no click cancel.");

  if (numbersSet) {
    passwordSet += numbers;
  }

  else {
    passwordSet === ("");
    alert("You must select at least one to continue...");
  }

  if (Number(passwordLengthSet >= 8) && Number(passwordLengthSet <= 128)) {
    for (var i = 0; i < passwordLengthSet; i++) {
      newPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
      console.log(newPassword);
    }
  }
  return newPassword;
}

function writePassword() {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
}

