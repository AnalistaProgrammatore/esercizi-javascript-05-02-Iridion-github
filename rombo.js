/* 
** Small program that asks the user for inputs to print in console 
** a regular rhombus of a specific size, made of chosen symbols.
*/

let errors = []
const getFigure = (size, full, empty) => {
  let line = ''
  let half = Math.floor(size / 2)
  let HALF = Math.ceil(size / 2)
  let result = ''

  for (let y = 0; y < size; y++) {
    if (y <= Math.floor(size / 2)) {
      for (let x = 0; x < size; x++) {
        if (x >= half - y && x < HALF + y) {
          line += full
        } else {
          line += empty
        }
        if (line.length === size) {
          result += line + '\n'
          line = ''
        }
      }
    } else {
      for (let x = size; x > 0; x--) {
        let incr = y - half
        let decr = size + HALF - y
        if (x > incr && x < decr) {
          line += full
        } else {
          line += empty
        }

        if (line.length === size) {
          result += line + '\n'
          line = ''
        }
      }
    }
  }
  return result
}

const userInput = prompt("Select the size of the figure. Make it an odd number.")
if (userInput % 2 === 0) {
  alert("Only odd numbers permitted!")
  location.reload()
} else {
  const fullSymbol = prompt("Type the character used for the rhombus.")
  if (fullSymbol.length !== 1) {
    alert('Please choose exactly one character.')
  } else {
    const emptySymbol = prompt("Type the character used for the background.")
    if (emptySymbol.length !== 1) {
      alert('Please choose exactly one character.')
    } else {
      if (fullSymbol === emptySymbol) {
        errors.push("You chose identical characters for figure and background. Your rhombus won't be visible.")
      }
      const rombo = getFigure(Number(userInput), String(fullSymbol), String(emptySymbol))
      console.log(rombo)
      document.getElementById("msg").innerHTML = "Your Rhombus was printed in console. Press f5 to play again. "
      if (errors.length > 0) {
        errors.forEach(e => {
          document.getElementById("errors").innerHTML += e
        })
      }
    }
  }

}