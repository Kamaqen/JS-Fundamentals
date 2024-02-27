function sumArray(array) {
  if (!array || array.length === 0) {
    return 0;
  }

  let sortedArray = array.slice().sort((a, b) => a - b);
  sortedArray.shift();
  sortedArray.pop();

  if (sortedArray.length !== 0) {
    return sortedArray.reduce((a, b) => a + b, 0);
  } else {
    return 0;
  }
}

const sumArray2 = (numbers) =>
  numbers && numbers.length > 1
    ? numbers
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((sum, number) => sum + number, 0)
    : 0;
