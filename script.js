
let yes = prompt("Do you want to play Rock Paper Scissors?");
yes = yes.toLowerCase();
let playerScore = 0;
if (yes === "yes") {
    game();
} else {
    alert("Goodbye!");
}

function game(){
    let userprompt = prompt("Enter your choice: rock, paper, or scissors");
    if (userprompt !== null) {
        userprompt = userprompt.toLowerCase();
        console.log("User choice: " + userprompt);
        computerChoice = getComputerChoice();
        console.log("Computer choice: " + computerChoice);
        let result = determineWinner(userprompt, computerChoice);
        console.log(result);
        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            playerScore--;
        }
        console.log("Player score: " + playerScore);
        let playAgain = prompt("Do you want to play again?");
        playAgain = playAgain.toLowerCase();
        if (playAgain === "yes") {
            game();
        } else {
            alert("Goodbye!");
        }
    }
}

function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "It's a tie!";
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return "You lose!";
        } else {
            return "You win!";
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return "You lose!";
        } else {
            return "You win!";
        }
    }
    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return "You lose!";
        } else {
            return "You win!";
        }
    }
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

