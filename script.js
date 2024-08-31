let robot = 0;
let human = 0;
// let status = "";
const choices = ['rock', 'paper', 'scissors'];

// to open the game console
function openModal() {
    document.getElementById("myModal").style.display = "block";
    resetGame();
    robot = 0;
    human = 0;
    statu = "";
    updateScores();
}

// to close the game console
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// starting point of the game 
function submitInput() {

    const randomIndex = Math.floor(Math.random() * choices.length);

    let roboChoice = choices[randomIndex];
    var userInput = document.getElementById("userInput").value;

    let userChoiceValue = userInput.toLowerCase();

    if (userChoiceValue === "") {
        console.log("Invalid input! Please enter Rock, Paper, or Scissors.");
        alert("Invalid input! Please enter Rock, Paper, or Scissors.");
    } else if (userChoiceValue === roboChoice) {
        console.log("Draw!!");
        statu = "Draw!!";
        updateScores();
    } else if ((userChoiceValue === "paper" && roboChoice === "rock") ||
        (userChoiceValue === "rock" && roboChoice === "scissors") ||
        (userChoiceValue === "scissors" && roboChoice === "paper")) {
        console.log("User wins!!");
        human += 1;
        statu = "User Wins!!";
        updateScores();
    } else {
        console.log("Robo wins!!");
        robot += 1;
        statu = "Robo Wins!!";
        updateScores();
    }

    console.log(`Score - User: ${human}, Robo: ${robot}`);
    // to check the who reach the first 5 wins, who ever win first 5 game.
    if (human === 5) {
        updateScores();
        console.log("User is the overall winner!");
        alert("User is the overall winner!");
        closeModal();
        resetGame();
    } else if (robot === 5) {
        updateScores();
        console.log("Robo is the overall winner!");
        alert("Robo is the overall winner!");
        closeModal();
        resetGame();
    }
    document.getElementById("userInput").value = '';
}

// to update the score and win(player, robot and draw)
function updateScores() {
    document.getElementById("userScore").innerText = human;
    document.getElementById("roboScore").innerText = robot;
    document.getElementById("status").innerText = statu;
}

// to reset the game
function resetGame() {
    robot = 0;
    human = 0;
    document.getElementById("userInput").value = '';
}