function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  } else {
    if (array1.length !== array2.length) {
      return false;
    }

    let array2Copy = array2.slice(); // Create a copy of array2

    for (const element1 of array1) {
      const squared = element1 ** 2;
      const index = array2Copy.indexOf(squared);
      if (index === -1) {
        return false; // If element1's square is not found in array2, return false
      }
      array2Copy.splice(index, 1); // Remove the found element from the copy of array2
    }

    return true;
  }
}

// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
