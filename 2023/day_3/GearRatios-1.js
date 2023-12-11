

const isNumberRegex = /\d/

const lookForSurroundingSymbols = (myInput, row, col) => {
  if (col - 1 >= 0 && myInput[row][col - 1] !== '.' && !isNumberRegex.test(myInput[row][col - 1])) {
    return true
  }
  if (col + 1 < myInput[row].length && myInput[row][col + 1] !== '.' && !isNumberRegex.test(myInput[row][col + 1])) {
    return true
  }
  if (col - 1 >= 0 && row - 1 >= 0 && myInput[row - 1][col - 1] !== '.' && !isNumberRegex.test(myInput[row - 1][col - 1])) {
    return true
  }
  if (row - 1 >= 0 && col + 1 < myInput[row].length && myInput[row - 1][col + 1] !== '.' && !isNumberRegex.test(myInput[row - 1][col + 1])) {
    return true
  }
  if (row + 1 < myInput.length && col - 1 >= 0 && myInput[row + 1][col - 1] !== '.' && !isNumberRegex.test(myInput[row + 1][col - 1])) {
    return true
  }
  if (row + 1 < myInput.length && col + 1 < myInput[row + 1].length && myInput[row + 1][col + 1] !== '.' && !isNumberRegex.test(myInput[row + 1][col + 1])) {
    return true
  }
  if (row - 1 >= 0 && myInput[row - 1][col] !== '.' && !isNumberRegex.test(myInput[row - 1][col])) {
    return true
  }
  if (row + 1 < myInput.length && myInput[row + 1][col] !== '.' && !isNumberRegex.test(myInput[row + 1][col])) {
    return true
  }
  return false
}

const countAllLinkedNumbers = (currInput) => {
  let sum = 0
  for (let i = 0; i < currInput.length; i++) {
    for (let j = 0; j < currInput[i].length; j++) {
      let currNum = ''
      foundSymbol = false
      if (isNumberRegex.test(currInput[i][j])) {
        while (isNumberRegex.test(currInput[i][j])) {
          currNum += currInput[i][j]
          if (!foundSymbol && lookForSurroundingSymbols(currInput, i, j)) {
            foundSymbol = true
          }
          j++
        }
        j--
        if (foundSymbol) {
          sum += parseInt(currNum)
        }
      }
    }
  }
  console.log("sum:" sum)
}

const fs = require("fs")
const path = require("path")
const readInput = fs.readFileSync("./input.txt").toString().split("\n")

countAllLinkedNumbers(readInput)