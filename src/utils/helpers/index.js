
// MEMO: inspired by https://gist.github.com/baybatu/5663f238534290d15be7
const splitIntoSubArray = (array, count) => {
  const copiedArray = [...array];

  const newArray = [];
  while (copiedArray.length > 0) {
    newArray.push(copiedArray.splice(0, count)); 
  }

  return newArray;
};

export {
  splitIntoSubArray
};
