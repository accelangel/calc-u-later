//Assign variables to number button elements 
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

//Assign variables to operation button elements
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');
const sumButton = document.getElementById('sum');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');

//Assign variables to display elements 
const equationDisplay = document.getElementById('equationDisplay');
const workingDisplay = document.getElementById('workingDisplay');

//Number Button Event Listeners
one.addEventListener('click', () => {
    numberBuffer(1);
    workingDisplayUpdate();
});
two.addEventListener('click', () => {
    numberBuffer(2);
    workingDisplayUpdate();
});
three.addEventListener('click', () => {
    numberBuffer(3);
    workingDisplayUpdate();
});
four.addEventListener('click', () => {
    numberBuffer(4);
    workingDisplayUpdate();
});
five.addEventListener('click', () => {
    numberBuffer(5);
    workingDisplayUpdate();
});
six.addEventListener('click', () => {
    numberBuffer(6);
    workingDisplayUpdate();
});
seven.addEventListener('click', () => {
    numberBuffer(7);
    workingDisplayUpdate();
});
eight.addEventListener('click', () => {
    numberBuffer(8);
    workingDisplayUpdate();
});
nine.addEventListener('click', () => {
    numberBuffer(9);
    workingDisplayUpdate();
});
zero.addEventListener('click', () => {
    numberBuffer(0);
    workingDisplayUpdate();
});
equals.addEventListener('click', () => {
    //work in progress
});

//Operation Buttons Event Listeners
sumButton.addEventListener('click', () => operationBuffer('+'));
subtractButton.addEventListener('click', () => operationBuffer('−'));
multiplyButton.addEventListener('click', () => operationBuffer('×'));
divideButton.addEventListener('click', () => operationBuffer('÷'));
equals.addEventListener('click', () => calculate());
decimal.addEventListener('click', () => decimalBuffer('.'));

clearButton.addEventListener('click', () => clearDisplay());
deleteButton.addEventListener('click', () => deleteFunction());

let firstNumber;
let secondNumber;
let operator = '';
let workingDisplayString = '0';
let equationDisplayString = '';
let firstNumberCompleted = false;
let result;
let calculationPerformed = false;

function numberBuffer(numberInput) {
    //console.log(calculationPerformed);
    newCalculation();
    //console.log(`numberBufferStart: ${workingDisplayString}`);
    if (workingDisplayString === '0') workingDisplayString = '';
    //console.log(`numberBufferMiddle: ${workingDisplayString}`);
    workingDisplayString += numberInput;
    //console.log(`numberBufferEnd: ${workingDisplayString}`);
}

function operationBuffer(sign) {
    if (firstNumberCompleted === false) {
        firstNumber = workingDisplayString;
        equationDisplayString = `${firstNumber} ${sign}`;
        equationDisplayUpdate();
        firstNumberCompleted = true;
        operator = sign;
        //this may or may not create other bugs, but im tring to fix the second numbner . only demical bug
        workingDisplayString = '0';
        //console.log(`operationBuffer: ${workingDisplayString}`);
    }
    else { //this allows you to change the operator sign after the secondNumber is already added
        equationDisplayString = `${firstNumber} ${sign}`;
        equationDisplayUpdate();
        operator = sign;
    }
}

function decimalBuffer() {
    newCalculation();
    //console.log(`demicalBufferStart: ${workingDisplayString}`);
    if (!workingDisplayString.includes('.')) {
        //
        workingDisplayString += '.';
        workingDisplayUpdate();
        //console.log(`demicalBufferEnd: ${workingDisplayString}`);
    }
}

function calculate() {
    calculationPerformed = true;
    secondNumber = workingDisplayString;
    //console.log(`${firstNumber} ${operator} ${secondNumber} =`);
    workingDisplayString = operate(firstNumber, operator, secondNumber);
    workingDisplayUpdate();
    equationDisplayString = `${firstNumber} ${operator} ${secondNumber} =`;
    equationDisplayUpdate();
}

function workingDisplayUpdate() { workingDisplay.innerText = workingDisplayString; };
function equationDisplayUpdate() { equationDisplay.innerText = equationDisplayString; }

function clearDisplay() {
    workingDisplayString = '0';
    equationDisplayString = '';
    workingDisplayUpdate();
    equationDisplayUpdate()
    firstNumberCompleted = false;
    operator = '';
}

function deleteFunction() {
    console.log(workingDisplayString);
    if (workingDisplayString.length >= 1) {
        workingDisplayString = workingDisplayString.slice(0, -1);
        workingDisplayUpdate();
        console.log(workingDisplayString);
        if (workingDisplayString === '') {
            clearDisplay();
        }
    }

}

function newCalculation() {
    if (calculationPerformed === true) {
        clearDisplay();
        calculationPerformed = false;
    }
}

function operate(firstNumber, operator, secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '−':
            result = firstNumber - secondNumber;
            break;
        case '×':
            result = firstNumber * secondNumber;
            break;
        case '÷':
            result = firstNumber / secondNumber;
            break;
    }
    //result is 50
    result = result.toFixed(10);
    console.log(result);
    result = result.toString();
    while ((result.slice(-1) === '0' && result.includes('.')) || result.slice(-1) === '.') {
        result = result.slice(0, -1);
        console.log(result);
    }
    return result;
}


