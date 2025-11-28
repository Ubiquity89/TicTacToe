let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".newgame");
let msg = document.querySelector("#msg");
let turn0 = true; // playerX, player0
let count = 0; // To track draw

// Winning patterns stored in an array
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Function to handle box click
const handleBoxClick = (box, index) => {
    // If box is already filled, return
    if (box.innerText !== "") return;
    
    // Mark the box with X or O
    box.innerText = turn0 ? "O" : "X";
    count++;
    
    // Check for win
    if (checkWinner()) {
        showWinner(turn0 ? "O" : "X");
        disableBoxes();
        return;
    }
    
    // Check for draw
    if (count === 9) {
        showDraw();
        return;
    }
    
    // Switch turn
    turn0 = !turn0;
    updateTurnIndicator();
};

// Function to check winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                return true;
            }
        }
    }
    return false;
};

// Function to show winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! ${winner} wins!`;
    msg.style.display = "block";
};

// Function to show draw
const showDraw = () => {
    msg.innerText = "Game ended in a draw!";
    msg.style.display = "block";
};

// Function to disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Function to enable all boxes
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

// Function to update turn indicator
const updateTurnIndicator = () => {
    const turnIndicator = document.querySelector("#turn-indicator");
    if (turnIndicator) {
        turnIndicator.innerText = `Player ${turn0 ? "O" : "X"}'s turn`;
    }
};

// Function to reset game
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msg.style.display = "none";
    updateTurnIndicator();
};

// Add event listeners to boxes
boxes.forEach((box, index) => {
    box.addEventListener("click", () => handleBoxClick(box, index));
});

// Add event listeners to reset buttons
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

// Initialize the game
resetGame();