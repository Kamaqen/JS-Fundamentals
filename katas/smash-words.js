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
