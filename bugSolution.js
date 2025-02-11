function foo(a, b) {
  if (a === null || b === null || isNaN(a) || isNaN(b)) {
    return 0; // Handle null and NaN values
  }

  return a + b;
}

//Example usage
console.log(foo(10,20)); // Output: 30
console.log(foo(10,NaN)); //Output: 0
console.log(foo(null,20)); //Output: 0