// targeting the generate password button
const generateBtn = document.querySelector("#generate");


// writePassword function contains undefined functions (generatePassword)
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when "generate password" button is clicked, writePassword function is called
generateBtn.addEventListener("click", writePassword);
