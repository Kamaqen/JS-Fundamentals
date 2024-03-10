smash = function (words) {
  return words.join(" ");
};

function smash(words) {
  "use strict";
  var smashed = "";
  for (var i = 0; i < words.length; i++) {
    smashed += words[i];
    if (i != words.length - 1) {
      smashed += " ";
    }
  }
  return smashed;
}

// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
