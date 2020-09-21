// This function is inefficient
// function square(n) {
//   let result = 0
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//   result +=1
//   }
// }
// return result
// }

// It runs pretty quicky! 
// console.log(square(5));
// 25

// BUT, when I put in a large number, it lags a bit. It is not efficient.
// console.log(square(30000));
// 900000000

// IF I have to run this multiple times...
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));

// This is where memoization comes in! The idea of memoization is you store the previous result so that way, if we call the function a bunch of times in a row with the same value, it's going to return the other ones instantaneously. We are caching the value based on the input. 

// SO HOW DO WE DO IT?

// The only thing we have to is we create const for previous values and set it to an empty array. And then, after we calculate our result, we just want to store that value inside the previous value. Essentially, everytime we call the function, we store the result in the nth position of that array. 

// const prevValues = []



// function square(n) {
//   let result = 0
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//   result +=1
//   }
//   }
//   prevValues[n] = result
// return result
// }

// // the result will still be incredibly slow. Therefore we DO...
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));


const prevValues = []

function square(n) {
  // if our prevValues of n is already there (!= null), then all we need to do is return that prevValues of n. It means that if we already called the function with variable n, just return the result. And if we run the function again, the first one executes slowly, but every single other one finishes instanteously because all it does it look up the value that already exist. 

  // Memoization is used everywhere in programming. The most popular cases are where we have two for loops that take a long time to execute and you want to get the same value over and over. 

  // Another really popular case is when you are fetching external resources, such as fetch API, then you use memoization to save you from making bunch of calls to the server because you've already know that you've made the call and you already know what the results are. You've essentially cached them. 

  // The last use case of memoization is in dynamic programming. Dynamic programming is when you have recursive function that calls itself multiple times with same inputs and you memoize the inputs. 
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
  result +=1
  }
  }
  prevValues[n] = result
return result
}

console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));



// FIBONACCI SEQUENCE
// takes in previous two numbers, adds them together and gives you the new number in sequence. n is the nth number of sequence we want to get. If n equals to 1 or is less than 2, we always return 1 because we need something to start the sequence. 

// Else, we can return the fibonacchi sequence of the previous number added to the fibonacchi of the second most previous number. 
function fib(n) {
  if (n <= 2) {
    return 1
  } else {
    return fib(n - 1) + fib (n-2)
  }
}

console.log(fib(4))
// 3




