

let screen = document.getElementById('calculator-screen');

let screenValue = '0';

let firstValue = null;

let previousOperator = null;

let waitingForSecondValue = false;

let screenMaxLength = 15;



function inputDigit(digit) {

    if (waitingForSecondValue) {

        screenValue = digit.toString();

        waitingForSecondValue = false;

    } else {

        screenValue = screenValue === '0' ? digit.toString() : screenValue + digit;

    }

    updateScreenDisplay();

}



function inputDecimal() {

    if (waitingForSecondValue) {

        screenValue = '0.';

        waitingForSecondValue = false;

    } else if (!screenValue.includes('.')) {

        screenValue += '.';

    }

    updateScreenDisplay();

}



function toggleSign() {

    screenValue = (parseFloat(screenValue) * -1).toString();

    updateScreenDisplay();

}



function getSquareRoot() {

    screenValue = Math.sqrt(parseFloat(screenValue)).toString();

    updateScreenDisplay();

}



function clearEntry() {

    screenValue = screenValue.slice(0, -1) || '0';

    updateScreenDisplay();

}



function allClear() {

    firstValue = null;

    screenValue = '0';

    previousOperator = null;

    waitingForSecondValue = false;

    updateScreenDisplay();

}



function handleOperator(nextOperator) {

    const inputValue = parseFloat(screenValue);

    

    if (firstValue === null && !isNaN(inputValue)) {

        firstValue = inputValue;

    } else if (previousOperator) {

        const result = calculate(firstValue, inputValue, previousOperator);

        screenValue = `${parseFloat(result.toFixed(7))}`;

        firstValue = result;

    }

    

    waitingForSecondValue = true;

    previousOperator = nextOperator;

    

    updateScreenDisplay();

}



function calculate(first, second, operator) {

    if (operator === '+') return first + second;

    if (operator === '-') return first - second;

    if (operator === '*') return first * second;

    if (operator === '/') return first / second;

    return second;

}



function separateScreenValueByComa() {

    let parts = screenValue.toString().split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join(".");

}



function exponentialFormat(value) {

    if (value.length > screenMaxLength) {

        return parseFloat(value).toExponential(8);

    }

    return value;

}



function updateScreenDisplay() {

    screen.textContent = exponentialFormat(separateScreenValueByComa());

}



document.addEventListener('DOMContentLoaded', () => {

    updateScreenDisplay();

});

