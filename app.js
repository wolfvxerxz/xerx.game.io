function reset(){
  document.querySelector('.game').style.backgroundColor = "black";
  document.querySelector('.player1-hand').src = "./assets/rock.png";
  document.querySelector('.player2-hand').src = "./assets/rock.png";
  document.querySelector(".winner").textContent = "And the winner is:";
}

function yourName(){
  let userInput = document.getElementById("userInput");
  let message = document.getElementById("message");
  message.innerHTML = userInput.value;
  if(userInput.value === "" || userInput.value == null){
    document.getElementById("message").innerHTML =  "Me";
    return userInput.value = "Me";
  }
  
}

function buttonBlock(){
  const btn = document.getElementById("buttonBlock");
  btn.disabled = true;
  setTimeout(()=>{
    btn.disabled = false;
    }, 1200);
};




const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const player1Hand = document.querySelector(".player1-hand");
    const player2Hand = document.querySelector(".player2-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //player2 Options
    const player2Options = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //player2 Choice
        const player2Number = Math.floor(Math.random() * 3);
        const player2Choice = player2Options[player2Number];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, player2Choice);
          //Update Images
          player1Hand.src = `./assets/${this.textContent}.png`;
          player2Hand.src = `./assets/${player2Choice}.png`;
        }, 1000);
        //Animation
        player1Hand.style.animation = "shakeplayer1 1s ease";
        player2Hand.style.animation = "shakeplayer2 1s ease";
      });
    });
  };

  const updateScore = () => {
    const player1Score = document.querySelector(".player1-score p");
    const player2Score = document.querySelector(".player2-score p");
    player1Score.textContent = pScore;
    player2Score.textContent = cScore;
  };
  
   
  const compareHands = (player1Choice, player2Choice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (player1Choice === player2Choice) {
      winner.textContent = "It is a tie";
      target.style.backgroundColor = "";
      return;
    }
    //Check for Rock
    if (player1Choice === "rock") {
      if (player2Choice === "scissors") {
        winner.textContent = userInput.value;
        target.style.backgroundColor = "green";
        pScore++;
        updateScore();
        return;
      } else {
        target.style.backgroundColor = "red";
        winner.textContent = "Player 2 ";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (player1Choice === "paper") {
      if (player2Choice === "scissors") {
        winner.textContent = "Player 2 ";
        target.style.backgroundColor = "red";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = userInput.value;
        target.style.backgroundColor = "green";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (player1Choice === "scissors") {
      if (player2Choice === "rock") {
        winner.textContent = "Player 2 ";
        target.style.backgroundColor = "red";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = userInput.value;
        target.style.backgroundColor = "green";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
