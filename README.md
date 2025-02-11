# JavaScript: Handling NaN in Arithmetic Operations

This repository demonstrates a common error in JavaScript involving the handling of NaN (Not a Number) values in arithmetic operations.

## The Bug

The original `foo` function attempts to add two numbers but does not handle the case where one or both of the inputs are NaN.  This results in the function returning NaN, which might cause unexpected behavior in the calling code.

## The Solution

The solution provided in `bugSolution.js` demonstrates the use of `isNaN()` to check for NaN values before performing the addition. If either input is NaN, the function returns a more appropriate default value, such as 0, to avoid unexpected results.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor or IDE.
3. Run the JavaScript code using your preferred environment (Node.js, browser console, etc.).