var testString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var testArray = testString.split(" ");
var popped = "";
var arrayElement = "";

function toLower(string) {
  var lower = string.toLowerCase();
  return lower;
}

function getASCII(string) {
  word = ""
  for (var i = 0; i < string.length; i++) {
    letter = string[i]
    ascii = string.charCodeAt(i);
    if (ascii >= 97 && ascii <= 122) {
      word += letter;
    }
  }
  if (word != "") {
    arrayElement = word;
  }
}

// function compare(popped) {
//   popped.forEach(function(string) {
//     if (letter
//   })

// } final strings
//
// function rank final strings

$(document).ready(function() {

testArray.forEach(function(element) {
  element.toLowerCase();
  getASCII(element);
  element = arrayElement;
})
console.log(testArray);
//   (popped).toLowerCase;
//   getASCII(popped);
//
// testString.pop();
//
// compare
// $("#display").append("<li>" + popped + "</li>");
// popped = "";
});
