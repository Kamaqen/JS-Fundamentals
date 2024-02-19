function solution(str, ending) {
  const strArray = str.split("").reverse();
  const endArray = ending.split("").reverse();

  if (ending === "") {
    console.log(ending);
    return true;
  }

  if (strArray.length < endArray.length) {
    return false;
  }

  for (let i = 0; i < endArray.length; i++) {
    if (strArray[i] !== endArray[i]) {
      return false;
    }
  }

  return true;
}

const solution2 = (str, ending) => str.endsWith(ending);

function solution(str, ending) {
  return str.substr(-ending.length) === ending;
}

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
