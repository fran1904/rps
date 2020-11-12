
// references
let roundsOutputElement = document.querySelector('#roundsOutputEl')
let userScoreEl = document.querySelector('#user-score')
let compScoreEl = document.querySelector('#comp-score')
let userMsg = document.querySelector('#msg')
let playIconsParent = document.querySelector('#play-icons')
let restartEl = document.querySelector('#reset')


// Global declarations
let roundCount = 0
var userScore = 0
var compScore = 0
let numOfRounds = 5
const computerChoices = ['rock', 'paper', 'scissors']
let userChoice = ""
let compChoice = ""
let radioBtns = `<form action="return false">
<div>
    <div>
        <input type="radio" id="five" name="rounds" value="5" checked>
        <label for="five">5</label>
    </div>
    <div>
        <input type="radio" id="ten" name="rounds" value="10">
        <label for="ten">10</label>
    </div>
</div>
<div>
    <div>
        <input type="radio" id="fifteen" name="rounds" value="15">
        <label for="fifteen">15</label>
    </div>
    <div>
        <input type="radio" id="twenty" name="rounds" value="20">
        <label for="twenty">20</label>
    </div>
</div>
</form>`

roundsOutputElement.innerHTML = radioBtns

// functions
let reset = () => {
    roundsOutputElement.innerHTML = radioBtns
    roundCount = 0
    userScore = 0
    userScoreEl.innerHTML = 0
    compScore = 0
    compScoreEl.innerHTML = 0
    numOfRounds = 5
    userChoice = ""
    compChoice = ""
}

// Store the number of rounds selected by the user in numOfRounds.
roundsOutputElement.addEventListener('click', (event) => {
   numOfRounds = event.target.value
})


playIconsParent.addEventListener('click', (event) => {
    console.log(event);
    roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`
    userChoice = event.target.dataset.handtype
    compChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]

    switch (userChoice){
        case 'rock': {
            if (compChoice === 'rock'){
                userMsg.innerHTML = `It was a draw! You both chose ${userChoice}`
                // event.target.style.background = 'orange'
                roundCount++
                roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`
            } else if (compChoice === 'paper'){
                userMsg.innerHTML = `${compChoice} (comp) beats ${userChoice} (user). You lose!`

                compScore++
                compScoreEl.innerHTML = compScore
                roundCount++
                roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`
            } else {     
                userMsg.innerHTML = `${userChoice} (user) beats ${compChoice}(comp). You win!`

                userScore++
                userScoreEl.innerHTML = userScore
                roundCount++
                roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`
            }
            break
        } 
        case 'paper': {
            if (compChoice === 'paper'){
                userMsg.innerHTML = `It was a draw! You both chose ${userChoice}`

                roundCount++
            } else if (compChoice === 'scissors'){
                userMsg.innerHTML = `${compChoice} (comp) beats ${userChoice} (user). You lose!`

                compScore++
                compScoreEl.innerHTML = compScore
                roundCount++
                roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`
            } else {    
                userMsg.innerHTML = `${userChoice} (user) beats ${compChoice}(comp). You win!`

                userScore++
                userScoreEl.innerHTML = userScore
                roundCount++
                roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`
            }
            break
        }
        case 'scissors': {
            if (compChoice === 'scissors'){
                userMsg.innerHTML = `It was a draw! You both chose ${userChoice}`

                roundCount++
                roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`
            } else if (compChoice === 'rock'){
                userMsg.innerHTML = `${compChoice} (comp) beats ${userChoice} (user). You lose!`

                compScore++
                roundCount++
                roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`
            } else {    
                userMsg.innerHTML = `${userChoice} (user) beats ${compChoice}(comp). You win!`

                userScore++
                userScoreEl.innerHTML = userScore
                roundCount++
                roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`
            }
            break
        } 
    } // end switch

    // output final msg
    if (numOfRounds === roundCount && userScore === compScore){
        userMsg.innerHTML = `It was a draw!`    
        } else if (numOfRounds === roundCount && userScore > compScore){
        userMsg.innerHTML = `You win!`
        } else if (numOfRounds === roundCount && userScore < compScore){
            userMsg.innerHTML = `You lose!`
    }

    } // end event listener block
) // end event listener





