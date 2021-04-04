console.log(padString('hello', '*', 10, true));
console.log(padString('hello', '*', 10, false));
console.log(padString('hello', '*', 3));
console.log(padString('world', '*', 5));
// console.log(padString('world', '*', 2));

function padString(string, char, number, left=true) {
 var charsCount = string.length;
 var length = number-charsCount;

 if (length > 0) {
  var newString = '';
  for (let i = 0; i<length; i++){
   newString+=char
  }
  if (left){
   return newString+string;
  } else {
   return string+newString;
  }
 } else {
  return string
 }
}