function findNb(m) {
  const n = (-1 + Math.sqrt(1 + 8 * Math.sqrt(m))) / 2;
  if (!Number.isInteger(n)) {
    return -1;
  }
  return Math.ceil(n);
}

function findNb2(m) {
  var n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
}

function findNb3(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}

// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
