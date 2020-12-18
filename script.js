// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables defined


var lowerCase = "abcdefghijklmnopqrstuvexyz";
var upperCase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$^&%*()+=-[]{}|:<>?,.'";
var numbers = "1234567890"

//start password generator by clicking button

generateBtn.addEventListener("click", generatePassword);

//function for generating random password

function generatePassword() {

    var passwordSet = "";

    var passwordLengthSet = prompt("How long would you like your password to be? HINT: must be between 8 and 128 characters.");

    if (Number(passwordLengthSet < 8) | Number(passwordLengthSet > 128) | isNaN(passwordLengthSet)) {
        alert("Enter a number between 8 and 128");
        return;
    }

    var lowerCaseSet = confirm("If you would include lower case letters click OK, if not click cancel.")

    if (lowerCaseSet) {
      passwordSet += lowerCase;
    }

    var upperCaseSet = confirm("If you would include upper case letters click OK, if not click cancel.")

    if (upperCaseSet) {
      passwordSet += upperCase;
    }

    var specialSet = confirm("If you would include special characters click OK, if not click cancel.")

    if (specialSet) {
      passwordSet += special;
    }

    var numbersSet = confirm("If you would include numbers click OK, if not click cancel.")

    if (numbersSet) {
      passwordSet += lowerCase;
    }

    else {
      passwordSet === ("")
      alert("You must select at least one to continue...");
  }
console.log(passwordSet)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}