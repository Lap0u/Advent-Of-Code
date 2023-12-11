const fs = require("fs")
const path = require("path")
const readInput = fs.readFileSync("./input.txt").toString().split("\n")

const splitNumbers = (currLine) => {
  const removeLeftPart = currLine.split(':')[1]
  const splitNums = removeLeftPart.split('|')
  const winningNums = splitNums[0].trim(' ').split(' ')
  const ourNums = splitNums[1].trim(' ').split(' ')
  return { winningNums, ourNums }
}

const countAllLinkedNumbers = (currInput) => {
  let sum = 0
  for (let i = 0; i < currInput.length; i++) {
    const { winningNums, ourNums } = splitNumbers(currInput[i])
    let tempSum = 0
    for (let j = 0; j < ourNums.length; j++) {
      if (ourNums[j] === '') {
        continue
      }
      if (winningNums.includes(ourNums[j])) {
        if (tempSum === 0) {
          tempSum = 1
        }
        else {
          tempSum *= 2
        }
      }
    }
    sum += tempSum
  }
  console.log('sum:', sum)
}

countAllLinkedNumbers(readInput)