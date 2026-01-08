function maxFind(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const test = maxFind([2, 4, 6, 1, 4,566,65,5]);
console.log(test);