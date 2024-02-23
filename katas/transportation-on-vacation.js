function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  } else if (d > 0) {
    return d * 40;
  }
}

// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
