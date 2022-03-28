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

// game system

function win(){
    userScore++;
    userScore_span.innerHTML = userScore
}
function lose(){
    compScore++;
    compScore_span.innerHTML = compScore
}
function draw(){}

function game(userChoice){
    choicesList = ["r", "p", "s"]
    let random = Math.floor(Math.random() * 3)
    let compChoice = choicesList[random]
    switch (userChoice + compChoice){
        case "rs":
        case "sp":
        case "pr":
            win()
            break
        case "sr":
        case "ps":
        case "rp":
            lose()
            break
        case "rr":
        case "pp":
        case "ss":
            draw()
            break
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