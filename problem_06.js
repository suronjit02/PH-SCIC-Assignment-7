function sumOfArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return sum;
}

const test = sumOfArray([1, 2, 3, 4,6]);
console.log(test);
