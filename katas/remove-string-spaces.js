function noSpace(x) {
  let result = "";
  console.log(x);
  for (char of x) {
    if (char !== " ") {
      result += char;
    }
  }
  return result;
}

const noSpace2 = (x) => x.split(" ").join("");

function noSpace3(x) {
  return x.replace(/\s/g, "");
}

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
