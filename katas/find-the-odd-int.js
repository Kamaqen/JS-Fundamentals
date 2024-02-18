function findOdd(A) {
  const appearances = {};
  if (A.length === 1) {
    return A[0];
  }
  const sortedArray = A.sort((a, b) => a - b);

  for (let num of sortedArray) {
    appearances[num] = appearances[num] ? appearances[num] + 1 : 1;
  }

  const values = Object.values(appearances);
  const oddValue = values.find((v) => v % 2 !== 0);
  console.log(oddValue);
  return parseInt(
    Object.keys(appearances).find((key) => appearances[key] === oddValue)
  );
}

const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
