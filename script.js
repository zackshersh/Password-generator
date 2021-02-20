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
  var upperCheck = document.getElementById("upperCaseCheck");
  var numCheck = document.getElementById("numCheck");
  var specialCheck = document.getElementById("specialCharCheck");

  numRange.addEventListener("mouseup", function(){
    document.getElementById("charNumDisplay").innerHTML = numRange.value + " charecters"
  })

  var charOptions = [lowerCheck,upperCheck,numCheck,specialCheck]

  var checkedCharOptions = [];

  for (var i=0;i<charOptions.length;i++){
    if(charOptions[i].checked == true){
      checkedCharOptions.push(charOptions[i].value)
    }
  }

  var lower = "abcdefghijklmnopqrstuvwxyz"
  lower = lower.split('')
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  upper = upper.split('')
  var number = "0123456789"
  number = number.split('')
  var special = "`~/?.>,<=+-_"
  special = special.split('')

  var passOutput = ""

  for (var i=0;i<numRange.value;i++){
    var charType = checkedCharOptions[getRandomInt(checkedCharOptions.length)];
    charType = eval(charType)

    var char = charType[getRandomInt(charType.length)]
    passOutput += char

  }

  console.log(passOutput)
  return passOutput;

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}