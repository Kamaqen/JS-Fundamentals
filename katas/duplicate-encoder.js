function duplicateEncode(word) {
  let newWord = "";

  for (let char of word) {
    const coincidences = word
      .toLowerCase()
      .split("")
      .filter((element) => element === char.toLowerCase());

    if (coincidences.length === 1) {
      newWord += "(";
    } else {
      newWord += ")";
    }
    console.log(newWord);
  }

  return newWord;
}

function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
