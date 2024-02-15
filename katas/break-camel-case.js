function solution(string) {
  let newArray = [];
  const uppercaseRegex = /[A-Z]/;
  for (const c of string) {
    if (c.match(uppercaseRegex)) {
      newArray.push(" ");
    }
    newArray.push(c);
  }
  if (newArray) {
    return newArray.join("");
  }
  return "";
}

function solution2(string) {
  return string.replace(/([A-Z])/g, " $1");
}

// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
