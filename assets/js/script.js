document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons)
    {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit")
            {
                checkAnswer();
            }
            else
            {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})

function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if (gameType === "addition")
    {
        displayAdditionQuestion(num1, num2);
    }
    else
    {
        alert(`Unkown game type: ${gameType}`);
        throw `Unknk`;
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculatedAnswer();

    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect)
    {
        alert("Right");
    }
    else
    {
        alert(`Was: ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+")
    {
        return [operand1 + operand2, "addition"];
    }
    else
    {
        alert(`Unimplemented operator ${operator}`);
        throw `Not implemented ${operator} lol`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}