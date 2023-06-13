export const getPositiveNumber = (numberList: number[]): number[] => {
  return numberList.filter((number: number) => number > 0);
};
