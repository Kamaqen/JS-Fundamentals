function disariumNumber(n) {
  const string = n.toString();
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += parseInt(string[i]) ** (i + 1);
  };
  return sum === n ? "Disarium !!" : "Not !!";
};

// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript