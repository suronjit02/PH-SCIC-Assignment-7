function capitalWord(str) {
  let words = str.split(" ");

  let newStr = [];

  for (let word of words) {
    newStr.push(word[0].toUpperCase() + word.slice(1));
  }

  return newStr.join(" ");
}

const test = capitalWord("hello world code");
console.log(test);
