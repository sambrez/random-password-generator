// targeting the generate password button
const generateBtn = document.querySelector("#generate");
// object establishing the character types
let characterSet = {
  lowerCaseLetter: "abcdefghijklmnopqrstuvwxyz",
  upperCaseLetter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  symbols: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

function generatePassword() {
  // variable prompts the user on password length and the if statment validates the user input
  let length = prompt("How many characters do you want the password to contain?");
  if (length < 8) {
    alert("Not enough characters.")
    return
  }
  if (length > 128) {
    alert("Too many characters.")
    return
  }
  
  // the variables prompt the user on character type and the if statement validates the user input
  const lower = confirm("Click OK to include lowercase letters.");
  const upper = confirm("Click OK to include uppercase letters.");
  const numbers = confirm("Click OK to include numbers.");
  const special = confirm("Click OK to include special characters.");
  let charString = "";
  let finalPassword = "";
  if (lower || upper || numbers || special) {}
  else {
    alert("No characters were selected.")
    return
  }

  if (lower) {
   charString = charString + characterSet.lowerCaseLetter
  };
  if (upper) {
    charString = charString + characterSet.upperCaseLetter
  };
  if (numbers) {
    charString = charString + characterSet.digits
  };
  if (special) {
    charString = charString + characterSet.symbols
  };

for ()

 return finalPassword;

  };


// writePassword function contains undefined functions (generatePassword)
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when "generate password" button is clicked, writePassword function is called
generateBtn.addEventListener("click", writePassword);

