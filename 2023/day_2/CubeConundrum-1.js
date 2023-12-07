const input = [
  ["1", "3 green`, 1 blue, 3 red; 3 blue, 1 green, 3 red; 2 red, 12 green, 7 blue; 1 red, 4 blue, 5 green; 7 green, 2 blue, 2 red"],
  ["2", "1 green, 19 blue, 1 red; 8 blue, 4 red; 3 red, 6 blue; 1 green, 1 red, 12 blue"],
  ["3", "3 green, 1 blue, 9 red; 1 blue, 2 green, 8 red; 1 blue, 2 red"],
  ["4", "6 green, 2 red; 2 red, 16 green; 3 red, 1 blue"],
  ["5", "5 blue, 1 green; 3 blue, 3 green, 3 red; 8 red, 1 blue, 2 green; 7 blue, 6 red; 4 red, 4 blue"],
  ["6", "5 red, 20 blue, 3 green; 4 red, 20 blue, 3 green; 12 blue, 3 green, 1 red; 3 red, 3 green, 19 blue"],
  ["7", "5 red, 3 blue, 9 green; 12 red, 3 blue; 5 green, 3 blue, 19 red; 6 red, 1 green, 3 blue"],
  ["8", "9 red; 2 green, 1 blue, 7 red; 5 red, 2 blue; 3 blue, 1 green; 1 green, 14 red, 1 blue; 3 blue, 4 red, 1 green"],
  ["9", "11 red, 2 green; 13 red, 8 green; 15 green, 3 red; 1 blue, 9 red, 18 green; 2 green, 12 red; 15 green, 9 red"],
  ["10", "1 green; 16 green, 3 red, 2 blue; 1 blue, 16 green, 4 red; 16 green, 5 red, 2 blue"],
  ["11", "2 red, 18 blue, 5 green; 4 green, 12 blue, 9 red; 6 red, 4 green, 5 blue; 8 red, 16 blue, 2 green; 1 green, 18 blue, 13 red; 13 blue, 9 red"],
  ["12", "5 red, 10 green, 4 blue; 8 green, 8 red, 14 blue; 10 green, 17 blue, 13 red; 7 blue, 9 red, 13 green; 6 red, 16 blue, 4 green; 16 blue, 14 red, 16 green"],
  ["13", "6 green, 1 red, 1 blue; 10 blue, 15 green; 1 blue, 2 red, 5 green; 2 blue, 1 red, 20 green; 3 blue, 3 red, 10 green"],
  ["14", "2 green, 2 blue; 2 green, 3 red, 4 blue; 8 red, 1 blue, 1 green"],
  ["15", "3 blue, 10 green, 1 red; 16 red, 1 blue, 20 green; 7 green, 6 blue, 13 red; 8 green, 20 red, 5 blue; 8 blue, 8 red, 18 green; 17 green, 8 red, 10 blue"],
  ["16", "6 blue, 5 red; 6 red, 16 blue, 11 green; 1 red, 3 green, 13 blue; 1 red, 5 green, 1 blue; 3 red, 14 green, 16 blue; 1 red, 1 green, 3 blue"],
  ["17", "8 green, 5 red, 7 blue; 2 blue, 2 green, 6 red; 3 green, 4 blue, 15 red"],
  ["18", "5 blue; 2 red, 9 blue, 3 green; 4 green, 20 blue, 2 red; 4 green, 2 red, 5 blue; 16 blue"],
  ["19", "15 red, 1 blue; 3 green, 16 red, 4 blue; 1 blue, 3 green, 4 red; 9 red, 2 green, 6 blue; 2 green, 5 blue, 4 red"],
  ["20", "12 red, 7 blue; 11 blue, 7 red, 1 green; 1 green, 10 red, 4 blue"],
  ["21", "9 blue, 1 green, 1 red; 4 blue, 2 green; 1 blue, 2 red"],
  ["22", "1 red, 10 green; 6 blue, 4 green, 1 red; 6 blue, 12 green, 1 red; 3 red, 4 blue, 10 green; 1 blue, 13 green, 1 red"],
  ["23", "14 red, 2 blue, 3 green; 8 green, 2 blue, 4 red; 2 blue, 7 green, 4 red; 4 blue, 7 red; 1 blue, 8 green, 13 red"],
  ["24", "1 blue, 6 green, 7 red; 6 green, 2 blue, 5 red; 1 blue, 3 green; 2 blue, 9 green; 1 green, 4 red; 5 green, 4 red"],
  ["25", "8 red, 2 green, 6 blue; 3 blue, 15 red, 1 green; 8 blue, 2 red; 2 blue, 1 green; 2 green, 18 red, 1 blue"],
  ["26", "9 red, 11 green, 6 blue; 1 blue, 2 red, 16 green; 15 green, 11 red, 6 blue; 3 red, 13 green, 6 blue; 20 red, 2 blue, 4 green"],
  ["27", "9 red, 10 blue, 17 green; 8 green, 15 blue; 4 green, 3 red; 11 blue; 14 green, 1 blue, 8 red; 10 blue, 5 green, 3 red"],
  ["28", "2 green, 17 red; 7 red, 6 green, 6 blue; 12 green, 16 red; 7 red, 7 green, 7 blue; 7 green, 8 red, 5 blue; 7 red, 5 blue"],
  ["29", "2 red, 2 blue, 3 green; 3 blue, 1 red; 3 green, 2 blue, 1 red; 6 red, 1 green, 4 blue"],
  ["30", "8 red, 15 blue, 4 green; 5 green, 9 red, 15 blue; 1 green, 1 blue, 11 red"],
  ["31", "6 blue, 2 red, 1 green; 2 blue, 2 red, 8 green; 2 blue, 1 red, 7 green"],
  ["32", "6 red, 7 green, 6 blue; 9 red, 6 blue, 6 green; 1 green, 13 red, 4 blue"],
  ["33", "3 green, 1 blue, 9 red; 2 blue, 12 red, 4 green; 1 blue, 5 red, 1 green; 4 green, 5 red, 2 blue; 1 red, 2 blue, 3 green; 3 green, 3 red, 1 blue"],
  ["34", "1 blue, 9 red; 3 blue, 4 red; 3 blue, 5 green, 10 red; 2 blue, 9 red, 5 green"],
  ["35", "3 red, 2 blue; 1 green, 10 blue, 4 red; 1 blue, 5 red, 2 green; 5 blue, 2 green, 1 red"],
  ["36", "9 green, 6 blue, 1 red; 16 blue, 8 green, 3 red; 9 green, 8 blue, 2 red; 3 green, 3 blue, 1 red; 16 blue, 3 red, 3 green"],
  ["37", "1 green, 1 red; 2 blue, 3 green; 1 red, 1 blue, 5 green; 1 red, 9 green, 2 blue; 12 green, 2 blue"],
  ["38", "16 blue, 12 red, 4 green; 15 blue, 5 green, 6 red; 7 red, 12 blue; 19 blue, 15 red, 1 green"],
  ["39", "1 red, 2 blue; 1 green, 10 red, 3 blue; 1 green, 2 red; 1 blue, 3 red"],
  ["40", "11 blue, 6 red, 3 green; 2 blue, 12 green, 1 red; 16 green, 5 red; 5 red, 10 green, 6 blue; 3 red, 13 green, 1 blue; 13 green, 3 blue, 7 red"],
  ["41", "19 red, 1 blue; 9 blue, 6 red; 10 red, 1 green, 17 blue"],
  ["42", "1 red, 8 green, 12 blue; 8 blue, 10 red, 12 green; 9 blue, 8 green, 9 red; 8 red, 11 green; 12 blue, 5 red, 2 green"],
  ["43", "6 blue, 7 red, 9 green; 4 blue, 6 red; 3 red, 4 blue, 5 green; 7 green, 15 blue; 15 blue, 9 green, 6 red; 6 green, 8 red, 7 blue"],
  ["44", "12 blue, 5 red; 7 red, 16 blue; 2 red, 4 blue, 8 green; 3 red, 10 blue, 3 green; 5 blue"],
  ["45", "3 green, 4 red, 6 blue; 1 green, 2 red, 11 blue; 6 red, 9 blue, 1 green; 8 blue, 3 green"],
  ["46", "1 blue, 9 green, 1 red; 1 blue, 2 red, 6 green; 10 green, 3 blue"],
  ["47", "2 green, 4 red; 2 green, 4 blue, 2 red; 2 blue, 3 green, 12 red; 12 red, 3 blue"],
  ["48", "4 blue, 3 green, 16 red; 1 green, 2 blue, 2 red; 9 green, 7 blue, 13 red"],
  ["49", "4 blue, 5 green, 17 red; 1 blue, 13 red, 2 green; 15 red, 1 blue, 5 green; 4 blue, 7 green, 19 red; 4 blue, 3 green; 2 green, 2 red"],
  ["50", "2 red, 3 green, 7 blue; 1 green, 9 blue, 1 red; 19 blue, 4 red; 1 green, 13 blue"],
  ["51", "2 blue, 4 green, 14 red; 8 blue, 17 green, 7 red; 1 blue, 6 green, 19 red; 20 red, 17 green, 6 blue; 2 green, 1 red, 9 blue"],
  ["52", "13 green, 17 blue, 2 red; 18 red, 12 blue, 10 green; 11 green, 17 red, 9 blue; 7 green, 11 red, 9 blue; 12 red, 15 blue; 7 green, 4 blue, 5 red"],
  ["53", "2 green, 1 red, 3 blue; 1 red, 1 blue; 1 blue; 1 blue, 1 green, 1 red"],
  ["54", "2 red, 5 green; 3 blue, 3 red, 2 green; 1 blue, 3 red, 5 green"],
  ["55", "7 green, 5 blue, 4 red; 8 blue, 7 red, 8 green; 12 blue, 2 red, 16 green; 3 green, 8 blue"],
  ["56", "9 green, 2 red, 1 blue; 1 blue, 11 red, 3 green; 9 red, 1 blue, 8 green; 10 red, 16 green"],
  ["57", "1 red, 5 blue, 9 green; 19 blue, 2 green, 5 red; 15 green, 3 red, 7 blue; 2 blue, 15 green, 9 red; 5 red, 9 green, 15 blue"],
  ["58", "5 green, 1 blue; 3 red, 2 blue; 2 blue, 1 red, 12 green; 8 green; 12 green, 2 blue; 4 green, 4 red"],
  ["59", "11 blue, 5 red, 4 green; 6 red, 1 green, 3 blue; 7 red, 10 blue, 4 green; 12 blue, 1 red, 1 green"],
  ["60", "3 green, 10 red, 10 blue; 10 green, 6 blue, 10 red; 1 blue, 6 green, 7 red; 3 red; 8 blue, 7 green, 8 red; 3 red, 19 green"],
  ["61", "11 green, 3 blue, 20 red; 3 green, 3 blue, 20 red; 10 green, 12 red, 8 blue; 4 green, 8 blue, 6 red; 7 blue, 10 red, 5 green; 6 green, 6 red"],
  ["62", "10 green, 9 red; 2 green, 2 blue, 5 red; 4 blue, 11 green, 12 red"],
  ["63", "5 blue, 4 green, 2 red; 5 blue, 3 red, 2 green; 6 blue, 2 green, 2 red; 1 red, 5 blue; 1 green, 3 blue"],
  ["64", "5 blue, 4 green, 8 red; 8 blue, 12 red, 10 green; 8 red, 7 blue; 7 green, 7 red; 5 blue, 1 red, 2 green"],
  ["65", "3 blue, 3 red, 15 green; 12 green, 3 blue, 12 red; 13 green, 6 red, 2 blue; 1 red, 7 blue, 3 green; 9 red, 5 green, 7 blue; 1 green, 5 blue, 9 red"],
  ["66", "1 green, 6 blue; 7 blue, 8 green; 2 blue, 9 red, 14 green"],
  ["67", "1 blue, 8 red, 1 green; 7 red, 10 green, 4 blue; 3 blue, 1 red, 4 green"],
  ["68", "8 blue, 8 green, 10 red; 4 red, 5 green; 4 blue, 12 red, 15 green"],
  ["69", "2 red, 3 blue, 2 green; 1 blue, 15 green, 4 red; 15 red, 20 green; 8 red, 4 green"],
  ["70", "6 red, 4 blue, 10 green; 5 blue, 6 red, 16 green; 9 green, 1 red, 1 blue; 2 blue, 6 green; 1 green, 3 blue, 5 red"],
  ["71", "9 red, 9 green, 4 blue; 1 blue, 5 green; 4 red, 2 blue, 5 green; 1 blue, 3 red, 2 green"],
  ["72", "14 blue, 1 red, 4 green; 18 blue, 1 red, 3 green; 1 red, 1 green, 10 blue"],
  ["73", "7 red, 6 green, 1 blue; 14 green, 1 blue, 4 red; 7 red, 18 green; 1 red, 5 green"],
  ["74", "9 green; 1 red, 7 blue, 4 green; 10 blue"],
  ["75", "4 red, 1 green; 1 green, 4 red, 2 blue; 3 green, 2 red, 7 blue"],
  ["76", "16 green, 7 blue, 1 red; 2 blue, 6 red, 2 green; 7 blue, 17 green; 5 red, 15 blue, 15 green"],
  ["77", "1 red, 7 blue, 8 green; 1 red, 6 blue, 5 green; 1 red, 5 blue, 4 green; 8 green, 1 blue; 2 blue"],
  ["78", "9 green, 3 blue; 6 red, 12 green; 5 red, 3 blue, 10 green; 3 blue, 14 green, 13 red"],
  ["79", "20 green, 1 blue, 3 red; 11 green, 4 red, 2 blue; 11 red, 1 blue, 5 green"],
  ["80", "14 red; 3 green, 2 blue, 7 red; 1 blue, 6 red"],
  ["81", "1 red; 11 blue; 11 blue; 9 blue, 5 green, 1 red"],
  ["82", "13 red, 17 blue, 9 green; 1 blue, 2 green; 9 red, 5 green, 6 blue; 10 green, 14 blue, 14 red; 5 green, 2 blue, 10 red; 4 blue, 4 green, 2 red"],
  ["83", "6 blue, 3 red, 5 green; 3 blue, 6 green; 13 red, 11 green, 1 blue; 7 blue, 1 green, 14 red; 9 green, 2 blue, 3 red; 8 green, 3 red, 2 blue"],
  ["84", "5 green, 8 blue; 7 red, 7 blue, 10 green; 7 blue, 7 green, 7 red; 7 blue, 1 green, 11 red"],
  ["85", "12 blue, 1 red, 2 green; 3 green, 13 red; 17 red, 1 blue, 2 green; 4 blue, 15 red; 9 blue, 7 red; 2 green, 11 red, 4 blue"],
  ["86", "15 green, 1 blue, 8 red; 1 blue, 18 green, 3 red; 3 red, 1 blue, 16 green"],
  ["87", "9 red, 17 blue, 9 green; 4 green, 6 red, 2 blue; 6 red, 5 blue"],
  ["88", "8 red, 6 blue, 17 green; 17 green, 5 blue, 12 red; 2 red, 14 green, 1 blue"],
  ["89", "14 red, 5 blue, 6 green; 1 blue, 6 green; 4 red, 9 green, 8 blue; 2 blue, 4 red, 11 green; 12 red, 1 green, 8 blue; 3 blue, 2 green, 5 red"],
  ["90", "3 red, 3 blue; 14 green, 8 blue; 4 red, 12 green, 8 blue"],
  ["91", "2 blue; 2 blue, 8 red; 4 red; 8 red, 1 blue; 1 green, 2 blue"],
  ["92", "16 green, 16 red; 5 green, 2 blue; 14 red, 16 green; 17 red, 1 blue, 12 green"],
  ["93", "9 blue, 14 red, 6 green; 2 blue, 6 red, 3 green; 1 green, 2 blue, 12 red; 6 green, 8 red, 5 blue; 5 blue, 9 green, 10 red; 7 blue, 10 green, 3 red"],
  ["94", "2 blue, 13 green, 7 red; 5 red, 2 blue, 14 green; 8 red, 9 green; 2 blue, 8 green, 1 red; 7 red, 12 green; 2 blue, 3 green"],
  ["95", "1 red, 8 blue, 4 green; 1 green, 3 blue, 2 red; 6 blue, 2 red, 1 green; 3 blue, 4 green; 3 green, 1 red"],
  ["96", "15 blue, 8 red, 5 green; 15 green, 16 blue, 4 red; 11 blue, 8 red; 16 blue, 6 green, 1 red; 10 blue, 9 red; 1 red, 3 green, 3 blue"],
  ["97", "11 green, 8 blue, 4 red; 12 green, 11 blue, 1 red; 4 red, 1 blue, 11 green; 6 green, 1 red, 7 blue; 5 blue, 12 green, 4 red; 5 blue, 8 green"],
  ["98", "4 green, 15 blue; 13 blue, 8 green; 10 blue, 6 green; 1 red, 7 green"],
  ["99", "1 green, 3 blue, 18 red; 8 blue, 19 red, 5 green; 7 red, 2 blue, 2 green; 10 red, 1 blue, 2 green"],
  ["100", "4 red, 3 green, 4 blue; 8 green, 5 red, 2 blue; 1 red, 2 blue, 7 green; 3 blue, 8 green, 5 red"]
]

const AVAILABLE_RED = 12
const AVAILABLE_GREEN = 13
const AVAILABLE_BLUE = 14

const testInput = [
  ["1", "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"],
  ["2", "1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"],
  ["3", "8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"],
  ["4", "1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red"],
  ["5", "6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"]
]

const checkSplittedGame = (splittedGame) => {
  const splittedCubes = splittedGame.split(',')
  for (let i = 0; i < splittedCubes.length; i++) {
    const splittedCube = splittedCubes[i].trim(' ').split(' ')
    if (splittedCube[1] === 'red' && splittedCube[0] > AVAILABLE_RED) return false
    if (splittedCube[1] === 'green' && splittedCube[0] > AVAILABLE_GREEN) return false
    if (splittedCube[1] === 'blue' && splittedCube[0] > AVAILABLE_BLUE) return false
  }
  return true
}

const checkIfGamePossible = (game) => {
  const splittedGames = game.split(';')
  for (let i = 0; i < splittedGames.length; i++) {
    if (checkSplittedGame(splittedGames[i]) === false) return false
  }
  return true
}

const countPossibleGames = () => {
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    if (checkIfGamePossible(input[i][1]) === true)
      sum += parseInt(input[i][0])
  }
  console.log(sum)
}

countPossibleGames()