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
  // variable prompts the user and the if statment validates the user input
  let length = prompt("How many characters do you want the password to contain?");
  if (length < 8) {
    alert("Not enough characters.")
    return
  }
  if (length > 128) {
    alert("Too many characters.")
    return
  }
  
  // the variables prompt the user and the if statement validates the user input
  const lower = confirm("Click OK to include lowercase letters.");
  const upper = confirm("Click OK to include uppercase letters.");
  const numbers = confirm("Click OK to include numbers.");
  const special = confirm("Click OK to include special characters.");
  if (lower || upper || numbers || special) {}
  else {
    alert("No characters were selected.")
    return
  }

  let charString = "";
  if (lower) {
   charString = characterSet.lowerCaseLetter
  };
  if (upper) {
    charString = characterSet.upperCaseLetter
  };
  if (numbers) {
    charString = characterSet.digits
  };
  if (special) {
    charString = characterSet.symbols
  };
 


 return

  };


// writePassword function contains undefined functions (generatePassword)
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when "generate password" button is clicked, writePassword function is called
generateBtn.addEventListener("click", writePassword);

