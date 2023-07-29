// function outerFunc(x) {
//     function innerFunc(y) {
//         return x + y;

//     }
//     innerFunc();
// } 

// const callToouter = outerFunc(5); 
// console.log(callToouter(10));


function outerFunction(x) {
    // This is the outer function scope
    function innerFunction(y) {
      // innerFunction has access to both its own parameter (y) and the outer function's parameter (x)
      return x + y;
    }
  
    return innerFunction;
  }
  
  const closureExample = outerFunction(10);
  console.log(closureExample(5)); // Output: 15






  /*In the example above, outerFunction takes a parameter x and returns innerFunction, which takes a parameter y. When we call outerFunction(10), it returns innerFunction with x set to 10. The variable closureExample now holds the reference to innerFunction with x being 10.

Later, when we call closureExample(5), it accesses the x value (which is 10) from its closure and adds it to the parameter y (which is 5), resulting in a return value of 15.

Closures are commonly used in various JavaScript patterns, such as the module pattern and to create private variables in objects. They help in encapsulating data and functionality, making code more modular and maintainable.*/
  