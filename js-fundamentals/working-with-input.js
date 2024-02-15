const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Who are you? ", (name) => {
  console.log(`${name}, it's a pleasure to meet you!`);
  readline.close();
});
