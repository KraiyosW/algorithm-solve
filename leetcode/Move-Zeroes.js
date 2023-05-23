let nums = [0, 1, 0, 3, 12, 7, 8, 0];

const moveZero = (nums) => {
  const numsOut = [];
  const saveZero = [];
  const newNums = [...nums];

  for (let i = 0; i < newNums.length; i++) {
    if (newNums[i] === 0) {
      saveZero.push(newNums[i]);
    } else {
      numsOut.push(newNums[i]);
    }
  }

  return numsOut.concat(saveZero);
};

console.log(moveZero(nums));
