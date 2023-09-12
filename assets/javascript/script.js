// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
// Write password to the #password input
function writePassword() {
  console.log("Writing password")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}
var upperCaseChar =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specChar = "!@#$%^&*()_+<>/?:[]{}`";
var passwordBase = "";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  while(true) {
    var length = prompt("Please enter a number of characters between 8 and 128 characters");
    var isNumeric = isNaN(length);
    if (isNumeric < 8) {
      alert("The password must be more than 8 characters");
      }
      else if(isNumeric > 128){
      alert("The password must not be more than 128 characters");
      }
  };

  var lowerCase = confirm("Would you like to include lowercase letters?");
  if (lowerCase) passwordBase += lowerCaseChar;
  var upperCase = confirm("Would you like to include upper case letters?");
  if (upperCase) passwordBase += upperCaseChar;
  var number = confirm ("Would you like to include numbers?");
  if (number) passwordBase += numberChar;
  var special = confirm ("Would you like to include special characters?");
  if (special) passwordBase += specChar;

  var finalRandomPassword = ""
}
  function getRandom(lower, upper, number, symbol) {

    var Chars = lower + upper + number + symbol;
	  var charArray = [{ lowerCaseChar }, { upperCaseChar }, { numberChar }, { specChar }].filter(item => Object.values(item)[0]);
    if (Chars === 0) {
      return "";
    }
    for (let i = 0; i < length; i++) {
      charArray.forEach(type => {
        var funcName = Object.keys(type)[0];
        generatePassword += randomFunc[funcName]();
      });
    }
    return generatedPassword.slice(0, length)
                    .split('').sort(() => Math.random() - 0.5)
                    .join('');
  };
	
  //do this logic for each type of character
  //If the user says it should have a lower case, check that password has at least 1 lowercase
  //create a for loop to check each character in the password
  //lowerCaseChar.split("")createlowercasearray
  //lowercasearray.includes(passwordcharacter)




