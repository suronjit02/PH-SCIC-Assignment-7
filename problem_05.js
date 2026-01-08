function duplicateRemove(arr) {
  let newArray = [];

  for (let num of arr) {
    if (!newArray.includes(num)) {
      newArray.push(num);
    }
  }
  return newArray;
}

const test = duplicateRemove([1, 2, 2, 3, 4, 4]);
console.log(test);
