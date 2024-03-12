function removeEveryOther(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    arr2.push(arr[i]);
  }
  return arr2;
}
