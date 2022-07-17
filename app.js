// score variables creation
//teste
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
    result_div.innerHTML = `User: ${charToWord(userChoice)} beats Comp: ${charToWord(compChoice)}`
    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add("green-glow")
    setTimeout(()=> {
        userChoice_div.classList.remove("green-glow")
    }, 300)
}
function lose(userChoice, compChoice){
    compScore++
    compScore_span.innerHTML = compScore
    result_div.innerHTML = `User: ${charToWord(userChoice)} loses to Comp: ${charToWord(compChoice)}`
    const userChoise_div = document.getElementById(userChoice)
    userChoise_div.classList.add("red-glow")
    setTimeout(()=>{
        userChoise_div.classList.remove("red-glow")
    }, 300)
    
}
function draw(userChoice){
    result_div.innerHTML = "Draw"
    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add("gray-glow")
    setTimeout(()=>{
        userChoice_div.classList.remove("gray-glow")
    }, 300)
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
            console.log("venceu")
            break
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, compChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice)
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