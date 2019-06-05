export const reverseString = (stringToReverse) => {
  const result = stringToReverse.split();
  for (let i = stringToReverse.length - 1, j = 0; i >= 0; i -= 1, j += 1) {
    result[j] = stringToReverse[i];
  }
  return result.join('');
};
