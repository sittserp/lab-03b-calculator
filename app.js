//ADDITION

// import functions and grab DOM elements

const addInput1 = document.getElementById('addInput1');
const addInput2 = document.getElementById('addInput2');
const addButton = document.getElementById('addButton');
const addResult = document.getElementById('addResult');

// initialize state

// set event listeners to update state and DOM

addButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    console.log(value1, value2);

    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);

    console.log(value1AsNumber, value2AsNumber);

    const sum = value1AsNumber + value2AsNumber;
    addResult.textContent = sum;

});

// MULTIPLICATION

// import functions and grab DOM elements

const xInput1 = document.getElementById('xInput1');
const xInput2 = document.getElementById('xInput2');
const xButton = document.getElementById('xButton');
const xResult = document.getElementById('xResult');

// initialize state

// set event listeners to update state and DOM

xButton.addEventListener('click', () => {
    const xvalue1 = xInput1.value;
    const xvalue2 = xInput2.value;

    console.log(xvalue1, xvalue2);

    const xvalue1AsNumber = Number(xvalue1);
    const xvalue2AsNumber = Number(xvalue2);

    console.log(xvalue1AsNumber, xvalue2AsNumber);

    const product = xvalue1AsNumber * xvalue2AsNumber;
    xResult.textContent = product;

});

// SUBTRACTION

// import functions and grab DOM elements

const minusInput1 = document.getElementById('minusInput1');
const minusInput2 = document.getElementById('minusInput2');
const minusButton = document.getElementById('minusButton');
const minusResult = document.getElementById('minusResult');

// initialize state

// set event listeners to update state and DOM

minusButton.addEventListener('click', () => {
    const minusValue1 = minusInput1.value;
    const minusValue2 = minusInput2.value;

    console.log(minusValue1, minusValue2);

    const minusValue1AsNumber = Number(minusValue1);
    const minusValue2AsNumber = Number(minusValue2);

    console.log(minusValue1AsNumber, minusValue2AsNumber);

    const difference = minusValue1AsNumber - minusValue2AsNumber;
    minusResult.textContent = difference;

});

//DIVISION

// import functions and grab DOM elements

const divideInput1 = document.getElementById('divideInput1');
const divideInput2 = document.getElementById('divideInput2');
const divideButton = document.getElementById('divideButton');
const divideResult = document.getElementById('divideResult');

// initialize state

// set event listeners to update state and DOM

divideButton.addEventListener('click', () => {
    const dividevalue1 = divideInput1.value;
    const dividevalue2 = divideInput2.value;

    console.log(dividevalue1, dividevalue2);

    const dividevalue1AsNumber = Number(dividevalue1);
    const dividevalue2AsNumber = Number(dividevalue2);

    console.log(dividevalue1AsNumber, dividevalue2AsNumber);

    const quotient = dividevalue1AsNumber / dividevalue2AsNumber;
    divideResult.textContent = quotient;

});