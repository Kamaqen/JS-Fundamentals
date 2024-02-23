const min = (list) => list.sort((a, b) => a - b)[0];
const max = (list) => list.sort((a, b) => b - a)[0];

const min2 = (list) => Math.min(...list);
const max2 = (list) => Math.max(...list);

var min3 = function (list) {
  var min = list[0];
  for (let el of list) {
    if (el < min) min = el;
  }
  return min;
};

var max3 = function (list) {
  var max = list[0];
  for (let el of list) {
    if (el > max) max = el;
  }
  return max;
};

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
