function getResultAll(operation, ...data) {
  let result = data[0];
  data.shift();

  switch (operation) {
    case '+':
      for (key in data) {
        if (Number.isInteger(data[key])) {
          result += data[key]
        }
      }
      break;
    case '-':
      for (key in data) {
        if (Number.isInteger(data[key])) {
          result -= data[key]
        }
      }
      break;
    case '*':
      for (key in data) {
        if (Number.isInteger(data[key])) {
          result *= data[key]
        }
      }
      break;
    case '/':
      for (key in data) {
        if (Number.isInteger(data[key])) {
          result /= data[key]
        }
      }
      break;
    default:
      return 'invalid operator';
  }

  return result
}


function reverseString(string) {
  let result = '';

  for (let i=string.length-1; i>=0; i--) {
    result += string[i]
  }

  return result
}

function isCharPresent(string, char) {
  let result = false;

  for (let i=0; i<=string.length; i++) {
    if (string[i] === char) {
      result = true
    }
  }

  return result
}

function charIndexOf(string, char) {
  let result = -1;

  for (let i=0; i<=string.length; i++) {
    if (string[i] === char) {
      result = i
    }
  }

  return result
}

console.log(getResultAll('*', 1, 1, 2, 1, 1));
console.log(reverseString('abcdefg'));
console.log(isCharPresent('abcdefg', 'a'));
console.log(isCharPresent('abcdefg', '4'));
console.log(charIndexOf('abcdefg', 'd'));
console.log(charIndexOf('abcdefg', '4'));
