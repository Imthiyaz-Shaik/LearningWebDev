const boxes = document.querySelectorAll(".box");
let currentPlayer = "X";

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        // Prevent clicking on an already filled box
        if (box.innerText !== "") return;

        // Fill the box with the current player's symbol
        box.innerText = currentPlayer;
        box.disabled = true;

        // Check for a winner
        if (checkWinner()) {
            alert(`${currentPlayer} wins!`); // Alert the winner
            disableAllBoxes(); // Disable all boxes to prevent further moves
        } else {
            // Switch players
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

function checkWinner() {
    return winPatterns.some(currentPattern => {
        const [a, b, c] = currentPattern;
        // Check if all three positions in the pattern are filled by the same player
        if (
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText &&
            boxes[a].innerText !== "")
        {
            return true; // There is a winner
        }
        return false; // No winner found in this pattern
    });
}

function disableAllBoxes() {
    boxes.forEach(box => {
        box.disabled = true; // Disable all boxes
    });
}

// Reset game functionality
document.querySelector(".resetBtn").addEventListener("click", resetGame);

function resetGame() {
    boxes.forEach(box => {
        box.innerText = ""; // Clear the box text
        box.disabled = false; // Re-enable all boxes
    });
    currentPlayer = "X"; // Reset current player to "X"
}
