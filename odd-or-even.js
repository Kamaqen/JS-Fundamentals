function oddOrEven(array) {
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

function oddOrEven2(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

const oddOrEven3 = (arr) =>
  ["even", "odd"][Math.abs(arr.reduce((a, b) => a + b, 0)) % 2];

// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
