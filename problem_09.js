function factorial(num) {
  //
  let factrl = 1;

  for (let i = 1; i <= num; i++) {
    factrl *= i;
  }

  return factrl;
}

const test = factorial(5);

console.log(test);
