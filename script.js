let playerTurn = 0;
let gameMode = 0;

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("click", function(e) {
        gameboard.fill(cell.id, playerTurn);
    });
});

const refresh = document.querySelector(".gameRestart");
refresh.addEventListener("click", function(e) {
    location.reload();
});

const gameboard = (() => {
    let playersSelections = [];

    const fill = (buttonId, turn) => {
        if (!isGameOver()) {
            const buttonToBeFilled = document.getElementById(`${buttonId}`);
        
            if (!(buttonToBeFilled.classList.contains("times") || buttonToBeFilled.classList.contains("circle"))) {
                if (turn == 0) {
                    buttonToBeFilled.classList.add("circle");

                    const icon = document.createElement("i");
                    icon.classList.add("far");
                    icon.classList.add("fa-circle");
                    buttonToBeFilled.appendChild(icon);

                    playerTurn = 1;
                    displayController.print("Player X's turn");
                    isGameOver();
                }
                else if (turn == 1) {
                    buttonToBeFilled.classList.add("times");

                    const icon = document.createElement("i");
                    icon.classList.add("fas");
                    icon.classList.add("fa-times");
                    buttonToBeFilled.appendChild(icon);

                    playerTurn = 0;
                    displayController.print("Player O's turn");
                    isGameOver();
                }
            }
        }
    };

    const isGameOver = () => {
        if (checkIfPlayerXIsWinner()) {
            displayController.print("Player X has won!");
            return true;
        }

        if (checkIfPlayerOIsWinner()) {
            displayController.print("Player O has won!");
            return true;
        }

        const allCells = Array.from(document.querySelectorAll(".cell"));

        if (allCells.every(c => c.classList.contains("times") || c.classList.contains("circle"))) {
            displayController.print("It's a draw!")
            return true;
        }

        return false;
    };

    const checkIfPlayerXIsWinner = () => {
        const allCells = Array.from(document.querySelectorAll(".cell")).filter(c => c.classList.contains("times"));

        if (allCells.some(c => c.id == "0") && allCells.some(c => c.id == "1") && allCells.some(c => c.id == "2")) {
            return true;
        }

        if (allCells.some(c => c.id == "3") && allCells.some(c => c.id == "4") && allCells.some(c => c.id == "5")) {
            return true;
        }

        if (allCells.some(c => c.id == "6") && allCells.some(c => c.id == "7") && allCells.some(c => c.id == "8")) {
            return true;
        }

        if (allCells.some(c => c.id == "0") && allCells.some(c => c.id == "3") && allCells.some(c => c.id == "6")) {
            return true;
        }

        if (allCells.some(c => c.id == "1") && allCells.some(c => c.id == "4") && allCells.some(c => c.id == "7")) {
            return true;
        }

        if (allCells.some(c => c.id == "2") && allCells.some(c => c.id == "5") && allCells.some(c => c.id == "8")) {
            return true;
        }

        if (allCells.some(c => c.id == "0") && allCells.some(c => c.id == "4") && allCells.some(c => c.id == "8")) {
            return true;
        }

        if (allCells.some(c => c.id == "2") && allCells.some(c => c.id == "4") && allCells.some(c => c.id == "6")) {
            return true;
        }

        return false;
    };

    const checkIfPlayerOIsWinner = () => {
        const allCells = Array.from(document.querySelectorAll(".cell")).filter(c => c.classList.contains("circle"));

        if (allCells.some(c => c.id == "0") && allCells.some(c => c.id == "1") && allCells.some(c => c.id == "2")) {
            return true;
        }

        if (allCells.some(c => c.id == "3") && allCells.some(c => c.id == "4") && allCells.some(c => c.id == "5")) {
            return true;
        }

        if (allCells.some(c => c.id == "6") && allCells.some(c => c.id == "7") && allCells.some(c => c.id == "8")) {
            return true;
        }

        if (allCells.some(c => c.id == "0") && allCells.some(c => c.id == "3") && allCells.some(c => c.id == "6")) {
            return true;
        }

        if (allCells.some(c => c.id == "1") && allCells.some(c => c.id == "4") && allCells.some(c => c.id == "7")) {
            return true;
        }

        if (allCells.some(c => c.id == "2") && allCells.some(c => c.id == "5") && allCells.some(c => c.id == "8")) {
            return true;
        }

        if (allCells.some(c => c.id == "0") && allCells.some(c => c.id == "4") && allCells.some(c => c.id == "8")) {
            return true;
        }

        if (allCells.some(c => c.id == "2") && allCells.some(c => c.id == "4") && allCells.some(c => c.id == "6")) {
            return true;
        }

        return false;
    };

    return { fill };
})();

const displayController = (() => {
    const print = (content) => {
        const heading = document.querySelector("h2");
        heading.textContent = content;
    };

    return { print };
})();