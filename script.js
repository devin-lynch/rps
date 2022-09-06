console.log('hola from js!')

let playerChoice
let computerChoice
let result = document.querySelector('#result-text')
const randomizer = Math.floor(Math.random() * 3)
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const choices = ['Rock', 'Paper', 'Scissors']
let playerWinTotal = 0
let computerWinTotal = 0

rock.addEventListener('click', function() {
    playerChoice = choices[0]
    console.log(playerChoice)
    runGame()
})

paper.addEventListener('click', function() {
    playerChoice = choices[1]
    console.log(playerChoice)
    runGame()
})

scissors.addEventListener('click', function() {
    playerChoice = choices[2]
    console.log(playerChoice)
    runGame()
})




// playerChoice = choices[2]
computerChoice = choices[randomizer]

console.log(playerChoice)
console.log(computerChoice)
function runGame() {
    computerChoice = choices[randomizer]
    if (computerChoice === choices[0]) {
        if (playerChoice === choices[1]){
            console.log(`You win! You selected ${playerChoice} and the computer selected ${choices[0]}`)
            result.innerText = `You win! You selected ${playerChoice} and the computer selected ${choices[0]}`
        } else if (playerChoice === choices[2]) {
            console.log(`You lose! You selected ${playerChoice} and the computer selected ${choices[0]}`)
            result.innerText = `You lose! You selected ${playerChoice} and the computer selected ${choices[0]}`
        } else {
            console.log(`An even display of skill! You both selected ${playerChoice}`)
            result.innerText = `An even display of skill! You both selected ${playerChoice}`
        }
    }

    if (computerChoice === choices[1]) {
        if (playerChoice === choices[2]){
            console.log(`You win! You selected ${playerChoice} and the computer selected ${choices[1]}`)
            result.innerText = `You win! You selected ${playerChoice} and the computer selected ${choices[1]}`
        } else if (playerChoice === choices[0]) {
            console.log(`You lose! You selected ${playerChoice} and the computer selected ${choices[1]}`)
            result.innerText = `You lose! You selected ${playerChoice} and the computer selected ${choices[1]}`
        } else {
            console.log(`An even display of skill! You both selected ${playerChoice}`)
            result.innerText = `An even display of skill! You both selected ${playerChoice}`
        }
    }

    if (computerChoice === choices[2]) {
        if (playerChoice === choices [0]) {
            console.log(`You win! You selected ${playerChoice} and the computer selected ${choices[2]}`)
            result.innerText = `You win! You selected ${playerChoice} and the computer selected ${choices[2]}`
        } else if (playerChoice === choices[1]) {
            console.log(`You lose! You selected ${playerChoice} and the computer selected ${choices[2]}`)
            result.innerText = `You lose! You selected ${playerChoice} and the computer selected ${choices[2]}`
        } else {
            console.log(`An even display of skill! You both selected ${playerChoice}`)
            result.innerText = `An even display of skill! You both selected ${playerChoice}`
        }
    }
}

