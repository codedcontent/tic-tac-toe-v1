
// Get hold of the tic-tac-toe boards in the game board
const allBox = document.getElementsByClassName('box');
let stillPlaying = true;

// Using a for loop and a click event listener to each tic-tac-toe board
for (let i = 0; i < allBox.length; i++) {
    const box = allBox[i];
    box.addEventListener('click', () => {
        if(stillPlaying) {
            if(box.innerText === "") {
                putText(box);
                determineWinner();
            }
        }
    })
}

// Function to put the text in the board
function putText(place) {
    let emptyBox = 0;
    for (let i = 0; i < allBox.length; i++) {
        const box = allBox[i];
        if (box.innerText === "") {
            emptyBox++;
        }
    }
    if(emptyBox % 2 == 0 && place.innerText == "") {
        place.innerText = "o"
    }else {
        place.innerText = "x"
    }
}

// Funtion to determine the winner
let noWinner = 9;
function determineWinner() {
    // There are 8 possible ways to win which are the comma seprerated patterns...

    // x - -   - - x   x - -   - x -  - - x  x x x  - - -  - - -
    // - x -   - x -   x - -   - x -  - - x  - - -  x x x  - - -
    // - - x,  x - -,  x - -,  - x -, - - x, - - -, - - -, x x x
    
    // We can store these patterns as a set of list in a list
    const patterns = [
        [0, 4, 8],
        [6, 4, 2],
        [0, 1, 2],
        [3, 4, 5],
        [2, 5, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    // Now check if the tic-tac-toe board value are the same and have that pattern
    // Using forEach to loop through the patterns and grab a pattern
    noWinner --;
    patterns.forEach((pattern) => {
        let aWinner = false;
        // perform some calculations with it
        let first = allBox[pattern[0]].innerText;
        let second = allBox[pattern[1]].innerText;
        let third = allBox[pattern[2]].innerHTML;

        if(first && second && third) {
            console.log("The boxes have been filled");
            if(first === second && second === third) {
                console.log(`There a winner and it's ${first}`);
                proveWinner([allBox[pattern[0]], allBox[pattern[1]], allBox[pattern[2]]]);
                aWinner = true;
            }else {
                // There is no winner
                if(noWinner === 0 && !aWinner) {
                    sayWinner(false);
                }
            }
        }
    });
    console.log(noWinner)
}

// Function to prove the winner
function proveWinner(correctBoxes) {
    correctBoxes.forEach((box) => {
        console.log(box.classList);
        box.style.backgroundColor = "green";
    });
    sayWinner(true, correctBoxes[0].innerText)
    stillPlaying = false;
}

// funtion to say who won
function sayWinner(isWinner, winner = "no one") {
    // if(isWinner) {
        
    // }esle {

    // }
    const header = document.getElementById('header');
        header.innerText = `${winner.toUpperCase()} wins the game`;
}