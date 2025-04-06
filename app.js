let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
     const options = ["rock","paper","scissors"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
};

const drawGame = () => {
     console.log("Game Was Draw");
     msg.innerText = "Game Was Draw, Try Agin";
     msg.style.backgroundColor = "rgb(121, 121, 2)";
}

const showWinner = (userWin,userchoice,compChoice) => {

     if(userWin) {
          userScore++;
          userScorePara.innerText = userScore;
          console.log("You Win!");
          msg.innerText = `You Win! Your ${userchoice} Beats ${compChoice}`;
          msg.style.backgroundColor = "rgb(1, 90, 1)";
     } else {
          compScore++;
          compScorePara.innerText = compScore;
          console.log("You Lose");
          msg.innerText = `You Lose ${compChoice} Beats Your ${userchoice}`;
          msg.style.backgroundColor = "red";
     }
};

const playGame = (userchoice) => {
     console.log("user choice = ",userchoice);
     const compChoice = genCompChoice();
     console.log("user choice = ",compChoice);

     if(userchoice === compChoice){
          drawGame();
     } else {
          let userWin = true;

          if(userchoice === "rock"){
               userWin = compChoice === "paper" ? false : true;
          } else if(userchoice === "paper") {
               userWin = compChoice === "scissors" ? false : true;
          } else {
               userWin = compChoice === "rock" ? false : true;
          }
          showWinner(userWin,userchoice,compChoice);
     }
};

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
          const userchoice = choice.getAttribute("id");
          playGame(userchoice);
     });
});

