function removeChar(str) {
  const array = str.split("");
  array.pop();
  array.shift();
  return array.join("");
}

function removeChar2(str) {
  return str.slice(1, -1);
}

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
