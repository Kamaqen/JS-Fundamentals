function doubleChar(str) {
  let newStr = "";
  for (let char of str) {
    const double = char + char;
    newStr = newStr + double;
    console.log(newStr);
  }
  return newStr;
}

const doubleChar2 = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");

function doubleChar3(str) {
  return str.replace(/(.)/g, "$1$1");
}

// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
