

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

            } else if (compChoice === 'paper'){
                // Display msg `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                userMsg.innerHTML = `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                // Change colors
                event.target.style.background = 'red'
                event.target.style.borderColor = 'red'
                // increment compScore
                compScore++
                // increment roundCount
                roundCount++
            } else {      // compChoice must be === 'scissors'
                // Display msg `${userChoice} (user) beats ${compChoice}(comp). You win!`
                userMsg.innerHTML = `${userChoice} (user) beats ${compChoice}(comp). You win!`
                // Change colors
                event.target.style.background = 'green'
                event.target.style.borderColor = 'green'
                // increment userScore; 
                userScore++
                //increment roundCount;
                roundCount++
            }
            break
        } 
        case 'paper': {
            if (compChoice === 'paper'){
                // don't increment either score; increment roundCount; Display msg `It was a draw! You both chose ${userChoice}`
            } else if (compChoice === 'scissors'){
                // increment compScore; increment roundCount; Display msg `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                // event.target.style.background = 'orange'; event.target.style.borderColor = 'orange'
            } else {      // compChoice must be === 'rock'
                // increment userScore; increment roundCount; Display msg `${userChoice} (user) beats ${compChoice}(comp). You win!`
            }
            break
        }
        case 'scissors': {
            if (compChoice === 'scissors'){
                  // don't increment either score; increment roundCount; Display msg `It was a draw! You both chose ${userChoice}`
            } else if (compChoice === 'rock'){
                // increment compScore; increment roundCount; Display msg `${compChoice} (comp) beats ${userChoice} (user). You lose!`
                // event.target.style.background = 'orange'; event.target.style.borderColor = 'orange'
            } else {      // compChoice must be === 'paper'
                // increment userScore; increment roundCount; Display msg `${userChoice} (user) beats ${compChoice}(comp). You win!`
                // event.target.style.background = 'green'; event.target.style.borderColor = 'green'
            }
            break
        } 
    } 




    // output final msg

if (numOfRounds === roundCount && userScore === compScore){
    userMsg.innerHTML = `It was a draw!`    
    } else if (numOfRounds === roundCount && userScore > compScore){
    userMsg.innerHTML = `You win!`
    } else {
    userMsg.innerHTML = `You lose!`
}