let word = "a short sentence";

const capitalize = (word) => {
  let newWord = word.trim();
  let changeToArray = newWord.split(/\s+/);
  let newCapitalize = "";

  for (let i = 0; i < changeToArray.length; i++) {
    if (changeToArray[i].length === 1) {
      newCapitalize += changeToArray[i].toUpperCase();
    } else {
      newCapitalize +=
        changeToArray[i][0].toUpperCase() +
        changeToArray[i].slice(1);
    }
    newCapitalize += ' ';
  }

  return newCapitalize.trim();
};

console.log(capitalize(word));