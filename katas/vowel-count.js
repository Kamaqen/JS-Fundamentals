// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}