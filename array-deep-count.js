function deepCount(a){
  if (a.length === 0) {
    return 0;
  } else {
    const arrays = a.filter(e => Array.isArray(e));
    const notArrays = a.length - arrays.length;
    console.log(arrays);
    return arrays ? notArrays + deepCount(arrays.find(e => Array.isArray(e))) : a.length;
  }
}

// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript