const spinWords = string => string.split(" ").map(word => word.length > 4 ? word.split("").reverse().join("") : word).join(" ");

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript