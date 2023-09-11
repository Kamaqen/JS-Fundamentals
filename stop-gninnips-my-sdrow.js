const spinWords = string => string.split(" ").map(e => e.length > 4 ? e.split("").reverse().join("") : e).join(" ");

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript