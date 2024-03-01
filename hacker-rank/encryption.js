function encryption(s) {
  // Remove spaces from the text
  const stringWithoutSpaces = s.replace(/\s/g, "");

  // Calculate the length of the string without spaces
  const L = stringWithoutSpaces.length;

  // Calculate the number of rows and columns
  let rows = Math.floor(Math.sqrt(L));
  let columns = Math.ceil(Math.sqrt(L));

  // Ensure rows * columns >= L
  while (rows * columns < L) {
    if (rows < columns) {
      rows++;
    } else {
      columns++;
    }
  }

  // Construct the grid
  let grid = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      const index = i * columns + j;
      if (index < L) {
        row.push(stringWithoutSpaces.charAt(index));
      }
    }
    grid.push(row.join(""));
  }

  // Construct the encrypted message by joining columns with a space
  const encryptedMessage = [];
  for (let j = 0; j < columns; j++) {
    let columnText = "";
    for (let i = 0; i < rows; i++) {
      if (grid[i][j]) {
        columnText += grid[i][j];
      }
    }
    encryptedMessage.push(columnText);
  }

  return encryptedMessage.join(" ");
}

// Example usage:
const inputText =
  "if a man was meant to stay on the ground god would have given us roots";
const encryptedText = encryption(inputText);
console.log("Encrypted message:", encryptedText);
