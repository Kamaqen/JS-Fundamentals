const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft ? true : false;
};

// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
