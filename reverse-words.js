// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

const reverseWords = str => str.split(' ').map(word => word.split('').reverse().join('')).join(' ');