
// MEMO: inspired by https://gist.github.com/baybatu/5663f238534290d15be7
const splitIntoSubArray = (array, count) => {
  const copiedArray = [...array];

  const newArray = [];
  while (copiedArray.length > 0) {
    newArray.push(copiedArray.splice(0, count)); 
  }

  return newArray;
};

const getNewUrlWithNewArtworkImageRes = (url, resolution = 200) => {
  const urlParts = url.split('/');
  const imageResPart = urlParts[urlParts.length - 1];
  const newImageResPart = `${resolution}x${resolution}bb.jpg`;
  const newUrl = url.replace(imageResPart, newImageResPart);

  return newUrl;
};

export {
  splitIntoSubArray,
  getNewUrlWithNewArtworkImageRes
};
