import { add, multiply, subtract, divide } from '../mathUtils.js';

// ADDITION
const addInput1 = document.getElementById('addInput1');
const addInput2 = document.getElementById('addInput2');
const addResult = document.getElementById('addResult');

export function handleAddClick() {
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    console.log(value1, value2);

    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);

    console.log(value1AsNumber, value2AsNumber);

    const sum = add(value1AsNumber, value2AsNumber);
    addResult.textContent = sum; 
}

//MULTIPLICATION
const xInput1 = document.getElementById('xInput1');
const xInput2 = document.getElementById('xInput2');
const xResult = document.getElementById('xResult');

export function handleMultiplyClick() {
    const value1 = xInput1.value;
    const value2 = xInput2.value;

    console.log(value1, value2);

    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);

    console.log(value1AsNumber, value2AsNumber);

    const sum = multiply(value1AsNumber, value2AsNumber);
    xResult.textContent = sum; 
}

//SUBTRACTION
const minusInput1 = document.getElementById('minusInput1');
const minusInput2 = document.getElementById('minusInput2');
const minusResult = document.getElementById('minusResult');

export function handleSubtractionClick() {
    const value1 = minusInput1.value;
    const value2 = minusInput2.value;

    console.log(value1, value2);

    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);

    console.log(value1AsNumber, value2AsNumber);

    const sum = subtract(value1AsNumber, value2AsNumber);
    minusResult.textContent = sum; 
}

//DIVISION
const divideInput1 = document.getElementById('divideInput1');
const divideInput2 = document.getElementById('divideInput2');
const divideResult = document.getElementById('divideResult');

export function handleDivisionClick() {
    const value1 = divideInput1.value;
    const value2 = divideInput2.value;

    console.log(value1, value2);

    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);

    console.log(value1AsNumber, value2AsNumber);

    const sum = divide(value1AsNumber, value2AsNumber);
    divideResult.textContent = sum; 
}