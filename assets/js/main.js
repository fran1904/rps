// references
let roundsOutputElement = document.querySelector("#roundsOutputEl");
let userScoreEl = document.querySelector("#user-score");
let compScoreEl = document.querySelector("#comp-score");
let userMsg = document.querySelector("#msg");
let playIconsParent = document.querySelector("#play-icons");
let restartEl = document.querySelector("#reset");

// Global stuff
let roundCount = 0;
var userScore = 0;
var compScore = 0;
let numOfRounds = 5;
const computerChoices = ["rock", "paper", "scissors"];
let userChoice = "";
let compChoice = "";
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
</form>`;

roundsOutputElement.innerHTML = radioBtns;

// reset function
let reset = () => {
  roundsOutputElement.innerHTML = radioBtns;
  roundCount = 0;
  userScore = 0;
  userScoreEl.innerHTML = 0;
  compScore = 0;
  compScoreEl.innerHTML = 0;
  numOfRounds = 5;
  userChoice = "";
  compChoice = "";  
  msg.innerHTML = "Let's play"
};

// toggle color on click function
const toggleClass = (state, ele) => { 
    setTimeout(() => {
        stripClasses(ele);
    }, 200);
  if (state === "red") {
    ele.classList.add("icon-btn--red");
  }
  if (state === "orange") {
    ele.classList.add("icon-btn--orange");
  }
  if (state === "green") {
    ele.classList.add("icon-btn--green");
  }
};

const stripClasses = (ele) => {
  ele.classList.remove("icon-btn--red");
  ele.classList.remove("icon-btn--green");
  ele.classList.remove("icon-btn--orange");
};

// Store the number of rounds selected by the user in numOfRounds.
roundsOutputElement.addEventListener("click", (event) => {
  numOfRounds = parseInt(event.target.value);
});

// handle click event
playIconsParent.addEventListener("click", (event) => {
    roundCount++;
    roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`;
    userChoice = event.target.dataset.handtype;
    compChoice =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];

    switch (userChoice) {
      case "rock": {
        if (compChoice === "rock") {
          userMsg.innerHTML = `It was a draw! You both chose ${userChoice}`;
          toggleClass("orange", event.target);
          roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`;
        } else if (compChoice === "paper") {
          userMsg.innerHTML = `${compChoice} <sup>(comp)</sup> beats ${userChoice} <sup>(user)</sup>. You lose!`;
          toggleClass("red", event.target);
          compScore++;
          compScoreEl.innerHTML = compScore;
          roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`;
        } else {
          userMsg.innerHTML = `${userChoice} <sup>(user)</sup> beats ${compChoice} <sup>(comp)</sup>. You win!`;
          toggleClass("green", event.target);
          userScore++;
          userScoreEl.innerHTML = userScore;
          roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`;
        }
        break;
      }
      case "paper": {
        if (compChoice === "paper") {
          userMsg.innerHTML = `It was a draw! You both chose ${userChoice}`;
          toggleClass("orange", event.target);
        } else if (compChoice === "scissors") {
          userMsg.innerHTML = `${compChoice} <sup>(comp)</sup> beats ${userChoice} <sup>(user)</sup>. You lose!`;
          toggleClass("red", event.target);
          compScore++;
          compScoreEl.innerHTML = compScore;
          roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`;
        } else {
          userMsg.innerHTML = `${userChoice} <sup>(user)</sup> beats ${compChoice} <sup>(comp)</sup>. You win!`;
          toggleClass("green", event.target);
          userScore++;
          userScoreEl.innerHTML = userScore;
          roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`;
        }
        break;
      }
      case "scissors": {
        if (compChoice === "scissors") {
          userMsg.innerHTML = `It was a draw! You both chose ${userChoice}`;
          toggleClass("orange", event.target);
          roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`;
        } else if (compChoice === "rock") {
          userMsg.innerHTML = `${compChoice} <sup>(comp)</sup> beats ${userChoice} <sup>(user)</sup>. You lose!`;
          toggleClass("red", event.target);
          compScore++;
          roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`;
        } else {
          userMsg.innerHTML = `${userChoice} <sup>(user)</sup> beats ${compChoice} <sup>(comp)</sup>. You win!`;
          toggleClass("green", event.target);
          userScore++;
          userScoreEl.innerHTML = userScore;
          roundsOutputElement.innerHTML = `<div class="round">${roundCount} / ${numOfRounds}</div>`;
        }
        break;
      }
    } // end switch

    // output final msg
    if (numOfRounds == roundCount && userScore === compScore) {
      userMsg.innerHTML = `It was a draw!`;
    } else if (numOfRounds == roundCount && userScore > compScore) {
      userMsg.innerHTML = `You win!`;
    } else if (numOfRounds == roundCount && userScore < compScore) {
      userMsg.innerHTML = `You lose!`;
    }
  } // end event listener block
); // end event listener
