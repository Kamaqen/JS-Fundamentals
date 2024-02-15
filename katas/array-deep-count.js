function deepCount(arr){
  if (!arr.find(e => Array.isArray(e))) {
    return arr.length;
  } else {
    let sum = arr.length;
    for (let subArr of arr.filter(e => Array.isArray(e))) {
      sum += deepCount(subArr)
    }
    return sum;
  }
}

// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript