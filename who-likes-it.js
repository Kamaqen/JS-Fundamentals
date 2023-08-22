function likes(names) {
  if (names.length === 0 ) {
    return "no one likes this";
  } else if (names.length === 1 ) {
    return `${names[0]} likes this`;
  } else if (names.length === 2 ) {
    [a, b] = names;
    return `${a} and ${b} like this`;
  } else if (names.length === 3 ) {
    [a, b, c] = names;
    return `${a}, ${b} and ${c} like this`;
  } else {
    [a, b, ...rest] = names;
    return `${a}, ${b} and ${rest.length} others like this`;
  }
}
console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));