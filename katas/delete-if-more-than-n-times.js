function deleteNth(arr, n) {
  let counts = {};
  let result = [];

  for (let num of arr) {
    if (!counts[num]) {
      counts[num] = 1;
    } else {
      counts[num]++;
    }
    if (counts[num] <= n) {
      result.push(num);
    }
  }

  return result;
}

// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
