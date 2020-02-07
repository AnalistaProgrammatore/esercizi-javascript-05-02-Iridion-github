/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to
* separate lines.
* At each position of the grid there is either a space or a "#" character.
* The characters should form a chessboard.

When you have a program that generates this pattern, define a binding size = 8 and change the program 
so that it works for any size, outputting a grid of the given width and height.
*/

let chessboard = ''
let size = 8
for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    if (y === 7) {
      chessboard += '\n'
    } else if (x % 2 === 0) {
      if (y % 2 === 0) {
        chessboard += '#'
      } else {
        chessboard += ' '
      }
    } else {
      if (y % 2 !== 0) {
        chessboard += '#'
      } else {
        chessboard += ' '
      }
    }
  }
}

console.log(chessboard)