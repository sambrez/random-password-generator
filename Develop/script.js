// targeting the generate password button
const generateBtn = document.querySelector("#generate");

function generatePassword() {
  const length = prompt("How many characters do you want the password to contain?");
  if (length < 8) {
    alert("Not enough characters.")
    return
  }
  if (length > 128) {
    alert("Too many characters.")
    return
  }
  
  const lower = confirm("Click OK to include lowercase letters.");
  const upper = confirm("Click OK to include uppercase letters.");
  const numbers = confirm("Click OK to include numbers.");
  const special = confirm("Click OK to include special characters.");
  };


// writePassword function contains undefined functions (generatePassword)
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when "generate password" button is clicked, writePassword function is called
generateBtn.addEventListener("click", writePassword);


// let characterSet = {
//   lowerCaseLetter: "abcdefghijklmnopqrstuvwxyz",
//   upperCaseLetter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   numbers: "0123456789",
//   special: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
//   }


// const charTypes = {
    
// };
// if (charTypes.length === 0) {
//   alert("No character types selected.")
//   return
// }

// let password = '';
//   for (let i = 0; i < length; i++) {

//   }