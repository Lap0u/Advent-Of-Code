const fs = require("fs")
const path = require("path")
const readInput = fs.readFileSync("./input.txt").toString().split("\n")

const splitInput = (currInput) => {
  let seedArray = currInput[0].split(":")[1].trim(" ").split(" ")
  let transformedArray = []
  for (let i = 3; i < currInput.length; i++) {
    if (currInput[i] === '') {
      for (let k = 0; k < seedArray.length; k++) {
        if (seedArray[k] !== -1) {
          transformedArray.push(seedArray[k])
        }
      }
      seedArray = [...transformedArray]
      transformedArray = []
      i++
      continue
    }
    const splitInput = currInput[i].split(" ")
    for (let j = 0; j < seedArray.length; j++) {
      if (seedArray[j] >= parseInt(splitInput[1]) && seedArray[j] < parseInt(splitInput[1]) + parseInt(splitInput[2])) {
        transformedArray.push(parseInt(seedArray[j]) + (parseInt(splitInput[0]) - parseInt(splitInput[1])))
        seedArray[j] = -1
      }
    }
  }
  for (let k = 0; k < seedArray.length; k++) {
    if (seedArray[k] !== -1) {
      transformedArray.push(seedArray[k])
    }
  }
  console.log("Answer:", transformedArray)
}

splitInput(readInput)