
const stringCase = "luffy is still joyboy"
const lengthOFLastWord = (stringCase) => {
    let seperateSpace = stringCase.trim();
    const goodArray = seperateSpace.split(/\s+/);
    let lastWord = goodArray.length;
    let output = goodArray[lastWord-1].length
    console.log(goodArray)
    return output;
}
console.log(lengthOFLastWord(stringCase))
