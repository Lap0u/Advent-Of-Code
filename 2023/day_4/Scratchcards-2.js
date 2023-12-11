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
  let ScratchCardsCounter = new Array(currInput.length).fill(1)
  for (let i = 0; i < currInput.length; i++) {
    const { winningNums, ourNums } = splitNumbers(currInput[i])
    let tempSum = 0
    for (let j = 0; j < winningNums.length; j++) {
      if (winningNums[j] !== '' && ourNums.includes(winningNums[j])) {
        tempSum += 1
      }
    }
    for (let l = 1; l <= tempSum && i + l < ScratchCardsCounter.length; l++) {
      ScratchCardsCounter[i + l] += ScratchCardsCounter[i]
    }
  }
  console.log("Sum:", ScratchCardsCounter.reduce((a, b) => a + b, 0))
}

countAllLinkedNumbers(readInput)