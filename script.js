function cloneObj(car) {
  let result = {};

  for (key in car) {
    if (car.hasOwnProperty(key)){
      result[key] = car[key]
    }
  }
  return result
}

function getValues(obj, separator) {
  let result = '';

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += car[key] + separator
    }
  }

  return result
}

function getKeys(obj, separator) {
  let result = '';

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += key + separator
    }
  }

  return result
}

function getEntries() {
  let result = '';

  for (key in car) {
    if (car.hasOwnProperty(key)) {
      result += key + ' ' + car[key] + "\n"
    }
  }

  return result
}


let car = {
  name: 'edick',
  age: 18,
};
console.log(cloneObj(car));
console.log(getValues(car, '/'));
console.log(getKeys(car, '/'));
console.log(getEntries(car));