export const isPangram = string => {
  const ALPHABET_SIZE = 26;
  // Convert the incoming string to lowercase +
  // Strip it of anything that isnt a letter
  const strToCheck = string.toLowerCase().replace(/[^a-z]/g, '');

  // A Set can only contain unique values, so by
  // checking the size of the set from the string
  // we can see if it has all 26 letters
  const distinctLetters = new Set(strToCheck).size;
  return distinctLetters === ALPHABET_SIZE;
};
