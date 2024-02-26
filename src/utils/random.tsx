export const getRandomElement = (listOfElements: any[]) => {
  const randomIndex = Math.floor(Math.random() * listOfElements.length);
  return listOfElements[randomIndex];
};
