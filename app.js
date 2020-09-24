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