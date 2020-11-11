
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
<input type="radio" id="five" name="rounds" value="5" checked>
<label for="five">5</label>

<input type="radio" id="ten" name="rounds" value="10">
<label for="ten">10</label><br>

<input type="radio" id="fifteen" name="rounds" value="15">
<label for="fifteen">15</label>

<input type="radio" id="twenty" name="rounds" value="20">
<label for="twenty">20</label>
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
roundsOutputElement.addEventListener('change', (event) => {
   numOfRounds = event.target.value
})





playIconsParent.addEventListener('click', (event) => {
    roundsOutputElement.innerHTML = `${roundCount} / ${numOfRounds}`
    userChoice = event.target.dataset.handtype
    compChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]

    // Start switch
    switch (userChoice){
        case 'rock': {
            if (compChoice === 'rock'){
                // Display msg `It was a draw! You both chose ${userChoice}`; 
                userMsg.innerHTML = `It was a draw! You both chose ${userChoice}`
                // Change colors
                event.target.style.background = 'orange'
                event.target.style.borderColor = 'orange'
                // increment roundCount (but don't increment either score)
                roundCount++
                roundsOutputElement.innerHTML = `${roundCount} / ${numOfRounds}`


            } else if (compChoice === 'paper'){
                // Display msg `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                userMsg.innerHTML = `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                // Change colors
                event.target.style.background = 'red'
                event.target.style.borderColor = 'red'
                // increment compScore
                compScore++
                compScoreEl.innerHTML = compScore
                // increment roundCount
                roundCount++
                roundsOutputElement.innerHTML = `${roundCount} / ${numOfRounds}`
            } else {      // compChoice must be === 'scissors'
                // Display msg `${userChoice} (user) beats ${compChoice}(comp). You win!`
                userMsg.innerHTML = `${userChoice} (user) beats ${compChoice}(comp). You win!`
                // Change colors
                event.target.style.background = 'green'
                event.target.style.borderColor = 'green'
                // increment userScore; 
                userScore++
                userScoreEl.innerHTML = userScore
                //increment roundCount;
                roundCount++
                roundsOutputElement.innerHTML = `${roundCount} / ${numOfRounds}`
            }
            break
        } 
        case 'paper': {
            if (compChoice === 'paper'){
                // Display msg `It was a draw! You both chose ${userChoice}`; 
                userMsg.innerHTML = `It was a draw! You both chose ${userChoice}`
                // Change colors
                event.target.style.background = 'orange'
                event.target.style.borderColor = 'orange'
                // increment roundCount (but don't increment either score)
                roundCount++
            } else if (compChoice === 'scissors'){
                // Display msg `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                userMsg.innerHTML = `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                // Change colors
                event.target.style.background = 'red'
                event.target.style.borderColor = 'red'
                // increment compScore
                compScore++
                compScoreEl.innerHTML = compScore
                // increment roundCount
                roundCount++
                roundsOutputElement.innerHTML = `${roundCount} / ${numOfRounds}`
            } else {      // compChoice must be === 'rock'
                // Display msg `${userChoice} (user) beats ${compChoice}(comp). You win!`
                userMsg.innerHTML = `${userChoice} (user) beats ${compChoice}(comp). You win!`
                // Change colors
                event.target.style.background = 'green'
                event.target.style.borderColor = 'green'
                // increment userScore; 
                userScore++
                userScoreEl.innerHTML = userScore
                //increment roundCount;
                roundCount++
                roundsOutputElement.innerHTML = `${roundCount} / ${numOfRounds}`
            }
            break
        }
        case 'scissors': {
            if (compChoice === 'scissors'){
                // Display msg `It was a draw! You both chose ${userChoice}`; 
                userMsg.innerHTML = `It was a draw! You both chose ${userChoice}`
                // Change colors
                event.target.style.background = 'orange'
                event.target.style.borderColor = 'orange'
                // increment roundCount (but don't increment either score)
                roundCount++
                roundsOutputElement.innerHTML = `${roundCount} / ${numOfRounds}`
            } else if (compChoice === 'rock'){
                // Display msg `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                userMsg.innerHTML = `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                // Change colors
                event.target.style.background = 'red'
                event.target.style.borderColor = 'red'
                // increment compScore
                compScore++
                // increment roundCount
                roundCount++
                roundsOutputElement.innerHTML = `${roundCount} / ${numOfRounds}`
            } else {      // compChoice must be === 'paper'
                // Display msg `${userChoice} (user) beats ${compChoice}(comp). You win!`
                userMsg.innerHTML = `${userChoice} (user) beats ${compChoice}(comp). You win!`
                // Change colors
                event.target.style.background = 'green'
                event.target.style.borderColor = 'green'
                // increment userScore; 
                userScore++
                userScoreEl.innerHTML = userScore
                //increment roundCount;
                roundCount++
                roundsOutputElement.innerHTML = `${roundCount} / ${numOfRounds}`
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





