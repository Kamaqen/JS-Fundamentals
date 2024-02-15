function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }

  positives = input.filter((e) => e > 0);
  positiveCount = positives.length;

  negatives = input.filter((e) => e < 0);
  negativeSum = negatives.reduce((a, b) => a + b, 0); // Initialize the reduce with 0

  array = [];
  array.push(positiveCount, negativeSum);

  return array;
}
