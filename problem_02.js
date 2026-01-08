function vowelCount(str) {
  let count = 0;
  let vowel = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

const test = vowelCount("programming");
console.log(test);
