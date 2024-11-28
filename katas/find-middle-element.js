function gimme (triplet) {
  const originalTriplet = [...triplet];
  const sortedTriplet = [...triplet].sort((a,b) => a-b);
  return originalTriplet.findIndex((e) => e === sortedTriplet[1]);
}

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
