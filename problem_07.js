function evenNumArray(arr) {
  let evenArray = [];

  for (let num of arr) {
    if ( num % 2 === 0) {
      evenArray.push(num);
    }
  }
  return evenArray;
}

const test = evenNumArray([1, 2, 3, 4, 5, 6]);
console.log(test);
