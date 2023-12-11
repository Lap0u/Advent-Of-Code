const isNumberRegex = /\d/

const extractAndReplace = (myInput, row, col) => {
  let currNum = ''
  let i = col
  while (i >= 0 && isNumberRegex.test(myInput[row][i])) {
    i--
  }
  i++
  while (i < myInput[row].length && isNumberRegex.test(myInput[row][i])) {
    currNum += myInput[row][i]
    myInput[row][i] = ']'
    i++
  }
  return parseInt(currNum)
}

const getSurroundingSum = (myInput, row, col) => {
  let foundNums = new Set()
  if (col - 1 >= 0 && isNumberRegex.test(myInput[row][col - 1])) {
    foundNums.add(extractAndReplace(myInput, row, col - 1))
  }
  if (col + 1 < myInput[row].length && isNumberRegex.test(myInput[row][col + 1])) {
    foundNums.add(extractAndReplace(myInput, row, col + 1))
  }
  if (col - 1 >= 0 && row - 1 >= 0 && isNumberRegex.test(myInput[row - 1][col - 1])) {
    foundNums.add(extractAndReplace(myInput, row - 1, col - 1))
  }
  if (row - 1 >= 0 && col + 1 < myInput[row].length && isNumberRegex.test(myInput[row - 1][col + 1])) {
    foundNums.add(extractAndReplace(myInput, row - 1, col + 1))
  }
  if (row + 1 < myInput.length && col - 1 >= 0 && isNumberRegex.test(myInput[row + 1][col - 1])) {
    foundNums.add(extractAndReplace(myInput, row + 1, col - 1))
  }
  if (row + 1 < myInput.length && col + 1 < myInput[row + 1].length && isNumberRegex.test(myInput[row + 1][col + 1])) {
    foundNums.add(extractAndReplace(myInput, row + 1, col + 1))
  }
  if (row - 1 >= 0 && isNumberRegex.test(myInput[row - 1][col])) {
    foundNums.add(extractAndReplace(myInput, row - 1, col))
  }
  if (row + 1 < myInput.length && isNumberRegex.test(myInput[row + 1][col])) {
    foundNums.add(extractAndReplace(myInput, row + 1, col))
  }
  if (foundNums.size === 2) {
    return [...foundNums].reduce((a, b) => a * b)
  }
  return 0
}

const countAllLinkedNumbers = (currInput) => {
  let sum = 0
  const inputCopy = [...currInput]
  currInput[10] = 'yoyoyoyo'
  for (let i = 0; i < currInput.length; i++) {
    for (let j = 0; j < currInput[i].length; j++) {
      if (currInput[i][j] === '*')
        sum += getSurroundingSum(currInput, i, j)
    }
    currInput = [...inputCopy]
  }
  console.log('sum:', sum)
}

const fs = require("fs")
const path = require("path")
const readInput = fs.readFileSync("./input.txt").toString().split("\n")

countAllLinkedNumbers(readInput)