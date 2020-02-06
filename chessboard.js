/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to
* separate lines.
* At each position of the grid there is either a space or a "#" character.
* The characters should form a chessboard.
*/

let chessboard = ''
for (let x = 0; x < 8; x++) {
  if (x % 2 === 0) {
    chessboard += '# # # # \n'
  } else {
    chessboard += ' # # # #\n'
  }
}

console.log(chessboard)