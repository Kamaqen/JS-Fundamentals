function maskify(cc) {
  const arraycc = Array.from(cc);
  const hashtag = "#";
  if (cc.length > 4) {
    const lastFour = arraycc.slice(-4);
    const masked = hashtag.repeat(arraycc.length-4);
    const unmasked = lastFour.join("");
    return masked.concat(unmasked);
  } else {
    return cc;
  } 
}
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript