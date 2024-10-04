const numberOfDice = document.getElementById("numberOfDice");
const DiceResults = document.getElementById("DiceResults");
const DiceImages = document.getElementById("DiceImages");

const dice = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];
let numOfRolls;

function rollDice(){
    let diceRolls = [];
    let diceToShow = [];

    numOfRolls = numberOfDice.value;
    for (i = 0; i<numOfRolls; i++){
        diceRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    DiceResults.textContent = diceRolls.join(", ");

    for(i = 0; i<diceRolls.length; i++){
        diceToShow.push(dice[diceRolls[i]-1]);
    }

    DiceImages.innerHTML = diceToShow.join(" ");
};