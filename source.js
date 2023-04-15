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

const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');
const sumButton = document.getElementById('sum');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');

const equationDisplay = document.getElementById('equationDisplay');
const workingDisplay = document.getElementById('workingDisplay');

const regexNumbers = /[0-9]/;
const regexOperators = /[-, +, *, \/]/;

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

sumButton.addEventListener('click', () => operationBuffer('+'));
subtractButton.addEventListener('click', () => operationBuffer('−'));
multiplyButton.addEventListener('click', () => operationBuffer('×'));
divideButton.addEventListener('click', () => operationBuffer('÷'));
equals.addEventListener('click', () => calculate());
decimal.addEventListener('click', () => decimalBuffer());

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
    newCalculation();
    if (workingDisplayString === '0') workingDisplayString = '';
    workingDisplayString += numberInput;
};

function operationBuffer(sign) {
    if (firstNumberCompleted === false) {
        firstNumber = workingDisplayString;
        equationDisplayString = `${firstNumber} ${sign}`;
        equationDisplayUpdate();
        firstNumberCompleted = true;
        operator = sign;
        workingDisplayString = '0';
    }
    else {
        equationDisplayString = `${firstNumber} ${sign}`;
        equationDisplayUpdate();
        operator = sign;
    }
};

function decimalBuffer() {
    newCalculation();
    if (!workingDisplayString.includes('.')) {
        workingDisplayString += '.';
        workingDisplayUpdate();
    }
};

function calculate() {
    calculationPerformed = true;
    secondNumber = workingDisplayString;
    workingDisplayString = operate(firstNumber, operator, secondNumber);
    workingDisplayUpdate();
    equationDisplayString = `${firstNumber} ${operator} ${secondNumber} =`;
    equationDisplayUpdate();
};

function workingDisplayUpdate() { workingDisplay.innerText = workingDisplayString; };
function equationDisplayUpdate() { equationDisplay.innerText = equationDisplayString; };

function clearDisplay() {
    workingDisplayString = '0';
    equationDisplayString = '';
    workingDisplayUpdate();
    equationDisplayUpdate()
    firstNumberCompleted = false;
    operator = '';
};

function deleteFunction() {
    if (workingDisplayString.length >= 1) {
        workingDisplayString = workingDisplayString.slice(0, -1);
        workingDisplayUpdate();
        if (workingDisplayString === '') {
            clearDisplay();
        }
    }
};

function newCalculation() {
    if (calculationPerformed === true) {
        clearDisplay();
        calculationPerformed = false;
    }
};

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
    result = result.toFixed(10);
    result = result.toString();
    while ((result.slice(-1) === '0' && result.includes('.')) || result.slice(-1) === '.') {
        result = result.slice(0, -1);
    }
    return result;
};

document.addEventListener('keydown', e => {
    if (regexNumbers.test(e.key)) {
        let input = e.key.match(regexNumbers);
        numberBuffer(input[0]);
        workingDisplayUpdate();
    }
    else if (regexOperators.test(e.key)) {
        let input = e.key.match(regexOperators);
        operationBuffer(input[0]);
    }
    else if (e.key === 'Enter') {
        calculate();
    }
    else if (e.key === '.') {
        decimalBuffer();
    }
    else if (e.key === 'Backspace' || e.key === 'Return key') {
        deleteFunction();
    }
});
