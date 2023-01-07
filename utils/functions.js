const orderedWordCounter = (word) => {
  // let word = "abracadabra";
  let result = [...word].reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1;
    return a;
  }, {});
  return Object.entries(result);
};

function consecutiveVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let currentIndex = 0;
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === vowels[currentIndex]) {
      currentIndex = currentIndex + 1 > 4 ? 0 : currentIndex + 1;
      count++;
    }
  }
  return count;
}

module.exports = {orderedWordCounter, consecutiveVowels};
