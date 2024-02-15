function stringToArray(string) {
  return string.split(" ");
}

function stringToArray2(string) {
  let newStr = "";
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      newStr = newStr + string[i];
    } else {
      result.push(newStr);
      newStr = "";
    }
  }
  result.push(newStr);
  return result;
}

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
