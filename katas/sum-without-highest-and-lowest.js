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
