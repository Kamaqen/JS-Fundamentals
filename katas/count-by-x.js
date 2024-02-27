function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
    console.log(z);
  }
  return z;
}

const countBy2 = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

const countBy3 = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);

// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
