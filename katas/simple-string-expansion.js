function stringExpansion(s) {
  const regex = /(\d)([a-zA-Z]+)/g;
  const regexElse = /[A-Za-z]+/;
  const matches = [];
  let match;
  let pattern = /[A-Za-z]+/;
  if (s && isNaN(s[0])) {
    // Find the first match using the regex pattern for match2
    let match2 = s.match(pattern);

    // Get the substring containing all alphabetic characters up to the first numeric character
    if (match2) {
      let result = match2[0];
      matches.push(result);
    }
  }
  while ((match = regex.exec(s))) {
    const numericChar = match[1];
    const alphabeticChars = match[2];
    if (alphabeticChars.length > 1) {
      let arr = alphabeticChars.split("");
      let arrRepeated = [];
      for (let el of arr) {
        let repeated = el.repeat(parseInt(numericChar));
        arrRepeated.push(repeated);
      }
      const repeatedChars = arrRepeated.join("");
      matches.push(repeatedChars);
      console.log(match[1]);
    } else {
      matches.push(alphabeticChars.repeat(parseInt(numericChar)));
    }
  }
  if (matches.length > 0) {
    return matches.join("");
  } else {
    return "";
  }
}

function stringExpansion2(s) {
  return s.replace(/\d\D*/g, (m) =>
    m.slice(1).replace(/./g, (n) => n.repeat(m[0]))
  );
}

function stringExpansion3(s) {
  let arr = s.split("");
  let newArr = [];
  let multiplier = 1;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 1 == 0) {
      multiplier = parseInt(arr[i]);
    } else if (arr[i] % 1 != 0) {
      newArr.push(arr[i].repeat(multiplier));
    }
  }
  return newArr.join("");
}

// https://www.codewars.com/kata/5ae326342f8cbc72220000d2/train/javascript
