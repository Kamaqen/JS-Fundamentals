function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

function validatePIN(pin) {
  const pinlen = pin.length;
  const isCorrectLength = pinlen == 4 || pinlen == 6;
  const hasOnlyNumbers = pin.match(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }

  return false;
}

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
