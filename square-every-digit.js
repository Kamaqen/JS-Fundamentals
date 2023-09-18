function squareDigits(num){
  const squares = num.toString().split("").map((n) => parseInt(n)**2).join("");
  return parseInt(squares);
}
// https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript