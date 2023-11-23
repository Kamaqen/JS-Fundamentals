var uniqueInOrder=function(iterable){
  const uniqueConsecutives = [];
  
  for (let i=0; i <= iterable.length; i++) {
    if (iterable[i] !== iterable [i+1]) {
      uniqueConsecutives.push(iterable[i]);
    }
  }
  return uniqueConsecutives  
}

//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript