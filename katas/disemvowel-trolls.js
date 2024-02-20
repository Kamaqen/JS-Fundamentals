function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      str = str.replace(char, "");
    }
  }
  return str;
}

function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, "");
}

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
