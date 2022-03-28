// score variables creation
let userScore = 0;
let compScore = 0;
//DOM variables
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("computer-score")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


// convert choice char into string
function charToWord(word){
    if (word === "r"){
        return word = "Rock"
    } else if (word === "p"){
        return word = "Paper"
    } else if (word === "s"){
        return word = "Scissors"
    }
}
// game system
function win(userChoice, compChoice){
    userScore++
    userScore_span.innerHTML = userScore
    result_div.innerHTML = `${charToWord(userChoice)} vence ${charToWord(compChoice)}`
}
function lose(){
    compScore++
    compScore_span.innerHTML = compScore
    result_div.innerHTML = `${charToWord(compChoice)} vence ${charToWord(userChoice)}`
}
function draw(){
    result_div.innerHTML = "Empate"
}

function game(userChoice){
    choicesList = ["r", "p", "s"]
    let random = Math.floor(Math.random() * 3)
    let compChoice = choicesList[random]
    switch (userChoice + compChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compChoice)
            break
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, compChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw()
            
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r")
    })
    paper_div.addEventListener('click', function(){
        game("p")
    })
    scissors_div.addEventListener('click', function(){
        game("s")
    })
}

main()