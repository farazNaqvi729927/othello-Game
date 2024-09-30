const numRows = 8;
const numCols = 8;

let countB = 2;
let countW = 2;

const gameBoard = Array.from({ length: numRows }, () => Array(numCols).fill(null));


gameBoard[3][3] = 'W';
gameBoard[3][4] = 'B';
gameBoard[4][3] = 'B';
gameBoard[4][4] = 'W';




// for resetting the game when player makes a illegal move
const initialGameBoard = Array.from({ length: numRows }, () => Array(numCols).fill(null));

initialGameBoard[3][3] = 'W';
initialGameBoard[3][4] = 'B';
initialGameBoard[4][3] = 'B';
initialGameBoard[4][4] = 'W';


const Display = document.getElementById('turn');
const Display1 = document.getElementById('b');

let symbol = true;


setTimeout(() => {
    alert('Black should make the first move then game will start!')
}, 1000);



const Board = (r, c) => {

    const elementId = document.getElementById(`button${r}${c}`);
    let anyFlippingHappened = false;


    if (gameBoard[r][c] === null) {


        //Right
        let hasOccupiedCell = false;
        let firstOccurrence;


        for (let i = c + 1; i < gameBoard[r].length; i++) {
            if (gameBoard[r][i] !== null) {
                hasOccupiedCell = true;
            }
        }


        if (hasOccupiedCell) {

            gameBoard[r][c] = symbol ? 'B' : 'W';
            elementId.textContent = symbol ? 'B' : 'W';

            for (let j = c + 1; j < gameBoard[r].length; j++) {
                if (gameBoard[r][j] === gameBoard[r][c]) {
                    firstOccurrence = j;
                    break;
                }
            }

            let isFlipped = false;

            for (let i = c + 1; i < firstOccurrence; i++) {

                if (gameBoard[r][i] === null) {
                    gameBoard[r][c] = null;
                    elementId.textContent = '';
                    isFlipped = false;
                    break;
                }

                else if (gameBoard[r][i] !== gameBoard[r][c]) {
                    const elementUpdId = document.getElementById(`button${r}${i}`);
                    isFlipped = true;


                    if (gameBoard[r][i] === 'W') {
                        gameBoard[r][i] = 'B';
                        elementUpdId.textContent = 'B';
                        countB++;
                        countW--;
                    }

                    else if (gameBoard[r][i] === 'B') {
                        gameBoard[r][i] = 'W';
                        elementUpdId.textContent = 'W';
                        countB--;
                        countW++;
                    }
                }
            }


            if (isFlipped) {
                anyFlippingHappened = true;
            }

        }






        //Left
        let hasOccupiedCell1 = false;
        let firstOccurrence1;


        for (let i = c - 1; i >= 0; i--) {
            if (gameBoard[r][i] !== null) {
                hasOccupiedCell1 = true;
            }
        }


        if (hasOccupiedCell1) {


            gameBoard[r][c] = symbol ? 'B' : 'W';
            elementId.textContent = symbol ? 'B' : 'W';


            for (let j = c - 1; j >= 0; j--) {
                if (gameBoard[r][j] === gameBoard[r][c]) {
                    firstOccurrence1 = j;
                    break;

                }
            }

            let isFlipped = false;

            for (let i = c - 1; i > firstOccurrence1; i--) {

                if (gameBoard[r][i] === null) {
                    gameBoard[r][c] = null;
                    elementId.textContent = '';
                    isFlipped = false;
                    break;
                }

                else if (gameBoard[r][i] !== gameBoard[r][c]) {
                    const elementUpdId = document.getElementById(`button${r}${i}`);
                    isFlipped = true;


                    if (gameBoard[r][i] === 'W') {
                        gameBoard[r][i] = 'B';
                        elementUpdId.textContent = 'B';
                        countB++;
                        countW--;
                    }

                    else if (gameBoard[r][i] === 'B') {
                        gameBoard[r][i] = 'W';
                        elementUpdId.textContent = 'W';
                        countB--;
                        countW++;
                    }
                }
            }


            if (isFlipped) {
                anyFlippingHappened = true;
            }
        }




        //Upwards
        let hasOccupiedCell2 = false;
        let firstOccurrence2;


        for (let i = r - 1; i >= 0; i--) {
            if (gameBoard[i][c] !== null) {
                hasOccupiedCell2 = true;
                break;

            }
        }


        if (hasOccupiedCell2) {


            gameBoard[r][c] = symbol ? 'B' : 'W';
            elementId.textContent = symbol ? 'B' : 'W';


            for (let j = r - 1; j >= 0; j--) {
                if (gameBoard[j][c] === gameBoard[r][c]) {
                    firstOccurrence2 = j;
                    break;

                }
            }

            let isFlipped = false;

            for (let i = r - 1; i > firstOccurrence2; i--) {

                if (gameBoard[i][c] === null) {
                    gameBoard[r][c] = null;
                    elementId.textContent = '';
                    isFlipped = false;
                    break;
                }

                else if (gameBoard[i][c] !== gameBoard[r][c]) {
                    const elementUpdId = document.getElementById(`button${i}${c}`);
                    isFlipped = true;

                    if (gameBoard[i][c] === 'W') {
                        gameBoard[i][c] = 'B';
                        elementUpdId.textContent = 'B';
                        countB++;
                        countW--;
                    }

                    else if (gameBoard[i][c] === 'B') {
                        gameBoard[i][c] = 'W';
                        elementUpdId.textContent = 'W';
                        countB--;
                        countW++;
                    }
                }
            }


            if (isFlipped) {
                anyFlippingHappened = true;
            }
        }




        //Downwards
        let hasOccupiedCell3 = false;

        for (let i = r + 1; i < gameBoard[c].length; i++) {
            if (gameBoard[i][c] !== null) {
                hasOccupiedCell3 = true;
            }

        }

        let firstOccurrence3;

        if (hasOccupiedCell3) {


            gameBoard[r][c] = symbol ? 'B' : 'W';
            elementId.textContent = symbol ? 'B' : 'W';


            for (let j = r + 1; j < gameBoard[c].length; j++) {
                if (gameBoard[j][c] === gameBoard[r][c]) {
                    firstOccurrence3 = j;
                    break;

                }
            }

            let isFlipped = false;

            for (let i = r + 1; i < firstOccurrence3; i++) {

                if (gameBoard[i][c] === null) {
                    gameBoard[r][c] = null;
                    elementId.textContent = '';
                    isFlipped = false;
                    break;
                }

                else if (gameBoard[i][c] !== gameBoard[r][c]) {
                    const elementUpdId = document.getElementById(`button${i}${c}`);
                    isFlipped = true;

                    if (gameBoard[i][c] === 'W') {
                        gameBoard[i][c] = 'B';
                        elementUpdId.textContent = 'B';
                        countB++;
                        countW--;
                    }

                    else if (gameBoard[i][c] === 'B') {
                        gameBoard[i][c] = 'W';
                        elementUpdId.textContent = 'W';
                        countB--;
                        countW++;
                    }
                }
            }


            if (isFlipped) {
                anyFlippingHappened = true;
            }

        }




        //Diagonals

        //Top-Left
        let hasOccupiedCell4 = false;

        for (let i = r + 1, j = c + 1; i < gameBoard.length && j < gameBoard.length; i++, j++) {
            if (gameBoard[i][j] !== null) {
                hasOccupiedCell4 = true;
            }
        }


        let firstOccurrence4R;
        let firstOccurrence4C;


        if (hasOccupiedCell4) {

            gameBoard[r][c] = symbol ? 'B' : 'W';
            elementId.textContent = symbol ? 'B' : 'W';

            for (let i = r + 1, j = c + 1; i < gameBoard.length && j < gameBoard.length; i++, j++) {
                if (gameBoard[i][j] === gameBoard[r][c]) {
                    firstOccurrence4R = i;
                    firstOccurrence4C = j;
                    break;
                }
            }

            let isFlipped = false;

            for (let i = r + 1, j = c + 1; i < firstOccurrence4R && j < firstOccurrence4C; i++, j++) {

                if (gameBoard[i][j] === null) {
                    gameBoard[r][c] = null;
                    elementId.textContent = '';
                    isFlipped = false;
                    break;
                }

                else if (gameBoard[i][j] !== gameBoard[r][c]) {
                    const elementUpdId = document.getElementById(`button${i}${j}`);
                    isFlipped = true;

                    if (gameBoard[i][j] === 'B') {
                        gameBoard[i][j] = 'W';
                        elementUpdId.textContent = 'W';
                        countW++;
                        countB--;
                    }

                    else if (gameBoard[i][j] === 'W') {
                        gameBoard[i][j] = 'B';
                        elementUpdId.textContent = 'B';
                        countB++;
                        countW--;
                    }
                }
            }


            if (isFlipped) {
                anyFlippingHappened = true;
            }

        }




        //Bottom-Right
        let hasOccupiedCell5 = false;

        for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
            if (gameBoard[i][j] !== null) {
                hasOccupiedCell5 = true;
            }
        }


        let firstOccurrence4R1;
        let firstOccurrence4C1;


        if (hasOccupiedCell5) {

            gameBoard[r][c] = symbol ? 'B' : 'W';
            elementId.textContent = symbol ? 'B' : 'W';

            for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
                if (gameBoard[i][j] === gameBoard[r][c]) {
                    firstOccurrence4R1 = i;
                    firstOccurrence4C1 = j;
                    break;
                }
            }

            let isFlipped = false;

            for (let i = r - 1, j = c - 1; i > firstOccurrence4R1 && j > firstOccurrence4C1; i--, j--) {

                if (gameBoard[i][j] === null) {
                    gameBoard[r][c] = null;
                    elementId.textContent = '';
                    isFlipped = false;
                    break;
                }

                else if (gameBoard[i][j] !== gameBoard[r][c]) {
                    const elementUpdId = document.getElementById(`button${i}${j}`);
                    isFlipped = true;

                    if (gameBoard[i][j] === 'B') {
                        gameBoard[i][j] = 'W';
                        elementUpdId.textContent = 'W';
                        countW++;
                        countB--;
                    }

                    else if (gameBoard[i][j] === 'W') {
                        gameBoard[i][j] = 'B';
                        elementUpdId.textContent = 'B';
                        countB++;
                        countW--;
                    }
                }
            }


            if (isFlipped) {
                anyFlippingHappened = true;
            }

        }







        //Top-Right
        let hasOccupiedCell6 = false;

        for (let i = r + 1, j = c - 1; i < gameBoard.length && j >= 0; i++, j--) {
            if (gameBoard[i][j] !== null) {
                hasOccupiedCell6 = true;
            }
        }


        let firstOccurrence4R2;
        let firstOccurrence4C2;


        if (hasOccupiedCell6) {

            gameBoard[r][c] = symbol ? 'B' : 'W';
            elementId.textContent = symbol ? 'B' : 'W';

            for (let i = r + 1, j = c - 1; i < gameBoard.length && j >= 0; i++, j--) {
                if (gameBoard[i][j] === gameBoard[r][c]) {
                    firstOccurrence4R2 = i;
                    firstOccurrence4C2 = j;
                    break;
                }
            }

            let isFlipped = false;

            for (let i = r + 1, j = c - 1; i < firstOccurrence4R2 && j > firstOccurrence4C2; i++, j--) {

                if (gameBoard[i][j] === null) {
                    gameBoard[r][c] = null;
                    elementId.textContent = '';
                    isFlipped = false;
                    break;
                }

                else if (gameBoard[i][j] !== gameBoard[r][c]) {
                    const elementUpdId = document.getElementById(`button${i}${j}`);
                    isFlipped = true;

                    if (gameBoard[i][j] === 'B') {
                        gameBoard[i][j] = 'W';
                        elementUpdId.textContent = 'W';
                        countW++;
                        countB--;
                    }

                    else if (gameBoard[i][j] === 'W') {
                        gameBoard[i][j] = 'B';
                        elementUpdId.textContent = 'B';
                        countB++;
                        countW--;
                    }
                }
            }


            if (isFlipped) {
                anyFlippingHappened = true;
            }

        }




        //Bottom-Left
        let hasOccupiedCell7 = false;

        for (let i = r - 1, j = c + 1; i >= 0 && j < gameBoard.length; i--, j++) {
            if (gameBoard[i][j] !== null) {
                hasOccupiedCell7 = true;
            }
        }


        let firstOccurrence4R3;
        let firstOccurrence4C3;


        if (hasOccupiedCell7) {

            gameBoard[r][c] = symbol ? 'B' : 'W';
            elementId.textContent = symbol ? 'B' : 'W';

            for (let i = r - 1, j = c + 1; i >= 0 && j < gameBoard.length; i--, j++) {
                if (gameBoard[i][j] === gameBoard[r][c]) {
                    firstOccurrence4R3 = i;
                    firstOccurrence4C3 = j;
                    break;
                }
            }

            let isFlipped = false;

            for (let i = r - 1, j = c + 1; i > firstOccurrence4R3 && j < firstOccurrence4C3; i--, j++) {

                if (gameBoard[i][j] === null) {
                    gameBoard[r][c] = null;
                    elementId.textContent = '';
                    isFlipped = false;
                    break;
                }

                else if (gameBoard[i][j] !== gameBoard[r][c]) {
                    const elementUpdId = document.getElementById(`button${i}${j}`);
                    isFlipped = true;

                    if (gameBoard[i][j] === 'B') {
                        gameBoard[i][j] = 'W';
                        elementUpdId.textContent = 'W';
                        countW++;
                        countB--;
                    }

                    else if (gameBoard[i][j] === 'W') {
                        gameBoard[i][j] = 'B';
                        elementUpdId.textContent = 'B';
                        countB++;
                        countW--;
                    }
                }
            }


            if (isFlipped) {
                anyFlippingHappened = true;
            }

        }





        if (anyFlippingHappened) {

            if (symbol) {
                gameBoard[r][c] = 'B';
                elementId.textContent = 'B';
                countB++;
            }

            else {
                gameBoard[r][c] = 'W';
                elementId.textContent = 'W';
                countW++;

            }
            symbol = !symbol;
        }

        else {
            for (let r = 0; r < numRows; r++) {
                for (let c = 0; c < numCols; c++) {
                    gameBoard[r][c] = initialGameBoard[r][c];
                    const elementResetId = document.getElementById(`button${r}${c}`);
                    elementResetId.textContent = initialGameBoard[r][c] ? initialGameBoard[r][c] : "";
                }
            }
            countB = 2;
            countW = 2;
            symbol = true;
            alert('Wrong Move! Game will be restarted!')

        }

    }


    const isBoardFull = () => {
        let allCellsFilled = true;

        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                if (gameBoard[r][c] === null) {
                    allCellsFilled = false;
                    break; // if it finds a single non-empty cell loop will break
                }


            }
        }



        if (allCellsFilled) {// this will run when the board is filled completely
            if (countB > countW) {

                Display1.innerHTML = `<h2 id="turn1" >Black Discs :  ${countB} </h2>
                 <h2 id="turn2">White Discs :  ${countW} </h2>`;

                alert('The Winner is Black Colour!');
                Display.innerHTML = '';

            }

            else if (countW > countB) {
                Display1.innerHTML = `
                        <h2 id="turn1" >Black Discs :
                            ${countB}
                        </h2>
   
                        <h2 id="turn2">White Discs :
                            ${countW}
                        </h2>`;

                alert('The Winner is White Colour!');
                Display.innerHTML = '';
            }


            else if (countB === countW) {
                Display1.innerHTML = `
                        <h2 id="turn1" >Black Discs :
                            ${countB}
                        </h2>
   
                        <h2 id="turn2">White Discs :
                            ${countW}
                        </h2>`;

                alert('Its a Tie!');
                Display.innerHTML = '';
            }

        }


        else {
            Display1.innerHTML = `
                <h2 id="turn1" >Black Discs Number:
                    ${countB}
                </h2>
                <h2 id="turn2" >White Discs Number:
                    ${countW}
                </h2>`;


            Display.innerHTML = `
            <div id="turn3">
                ${symbol ? '<div> Player Turn = Black </div>' : '<div> Player Turn = White </div>'}
            </div>`;

        }
    }

    isBoardFull();
}









