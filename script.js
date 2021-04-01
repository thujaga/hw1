var num = prompt('number');
console.log(num);
var string = '';
for (let i = 0; i <= num; i++) {
 var snows = '';
 for (let q = 0; q < i; q++) {
  snows += '*'
 }
 string += snows + "\n"
}
console.log(string);
