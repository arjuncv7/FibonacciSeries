const calcFibonacci = (f0, f1, n) => {
  let fibSequence = [f0, f1];
  if (n < 0) {
    for (let i = 2; i <= Math.abs(n); i++) {
      fibSequence[i] = fibSequence[i - 2] - fibSequence[i - 1];
    }
    return fibSequence[Math.abs(n)];
  } else {
    for (let i = 2; i <= n; i++) {
      fibSequence[i] = fibSequence[i - 2] + fibSequence[i - 1];
    }
    return fibSequence[n];
  }
};

let num = parseInt(prompt("Enter the value for n"));
while (isNaN(num)) {
  num = parseInt(prompt("Please enter an integer value for n"));
}
const result = calcFibonacci(0, 1, num);
console.log("For n = " + num + " the Fibonacci number is " + result);
