// function DNAtoRNA(dna){
//   return dna.replace(/T/g, 'U');
// }
// function DNAtoRNA(dna) {
//   return dna.replaceAll('T','U');
// }
const DNAtoRNA = dna => dna.split("").map( char =>  char === "T" ? char = "U" : char).join("");

// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript