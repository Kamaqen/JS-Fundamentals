function findYSequence(p) {
  const n = p.length;
  const yValues = [];

  for (let x = 1; x <= n; x++) {
    for (let y = 0; y < n; y++) {
      if (p[p[y] - 1] === x) {
        yValues.push(y + 1);
        break;
      }
    }
  }

  return yValues;
}

// Example usage:
const sequence = [2, 3, 1];
const ySequence = findYSequence(sequence);
console.log("Values of y:", ySequence); // Output should be [3, 1, 2]
