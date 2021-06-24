import { getRandomInt } from "./randomInt";
export const randomizeList = (originalList) => {
  const usedIndex = [];
  const randomizedRecipes = [];
  originalList.map((item, index) => {
    console.log(index);
    let randomIndex = getRandomInt(0, originalList.length - 1);
    while (usedIndex.includes(randomIndex)) {
      randomIndex = getRandomInt(0, originalList.length - 1);
    }
    usedIndex.push(randomIndex);
    randomizedRecipes[randomIndex] = item;
  });
  return randomizedRecipes;
};
