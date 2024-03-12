function removeEveryOther(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    arr2.push(arr[i]);
  }
  return arr2;
}

function removeEveryOther2(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}
