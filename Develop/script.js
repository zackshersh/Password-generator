// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  // generateBtn.style.display = "none";

  var promptDiv = document.getElementById("generatePrompts")
  promptDiv.style.display = "block";

  var numRange = document.getElementById("charNumRange");
  var lowerCheck = document.getElementById("lowerCaseCheck");
  var upperCheck = document.getElementById("lowerCaseCheck");
  var numCheck = document.getElementById("numCheck");
  var specialCheck = document.getElementById("specialCharCheck");

  numRange.addEventListener("mouseup", function(){
    document.getElementById("charNumDisplay").innerHTML = numRange.value + " charecters"
  })


}