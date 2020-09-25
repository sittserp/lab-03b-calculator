// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add, multiply, subtract, divide } from '../mathUtils.js';

const test = QUnit.test;

test('if I add 5 and 3 it will return 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 5;
    const argument2 = 3;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('if I multiply 5 and 3 it will return 15', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 5;
    const argument2 = 3;
    const expected = 15;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('if I subtract 3 from 5, it will return 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 5;
    const argument2 = 3;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if I divide 8 by 2 it will return 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 8;
    const argument2 = 2;
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

