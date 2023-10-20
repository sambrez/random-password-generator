// targeting the generate password button
const generateBtn = document.querySelector("#generate");

function generatePassword() {
  let length = prompt("How many characters do you want the password to contain?");
  if (length < 8) {
    alert("Not enough characters.")
    return
  }
  if (length > 128) {
    alert("Too many characters.")
    return
  }
  let lower = confirm("Click OK to include lowercase letters.");
  let upper = confirm("Click OK to include uppercase letters.");
  let numbers = confirm("Click OK to include numbers.");
  let special = confirm("Click OK to include special characters.");
  // let charaterType = {
  //   lowerCaseLetter: "abcdefghijklmnopqrstuvwxyz",
  //   upperCaseLetter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  //   numbers: "0123456789",
  //   special: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  //   }
  
    return;
  };


// writePassword function contains undefined functions (generatePassword)
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when "generate password" button is clicked, writePassword function is called
generateBtn.addEventListener("click", writePassword);
