export const isPangram = string => {
  // Convert the incoming string to lowercase
  // Strip it of anything that isnt a letter
  const strToCheck = string
    .toLowerCase()
    .replace(/[^A-Za-z]/g, '')
    .split('');

  // Using the spread operator you can return an array with only
  // unique characters, as we are testing for a pangram then this
  // new array should equal 26 otherwise we are missing a letter
  const distinctLetters = [...new Set(strToCheck)];
  if (distinctLetters.length === 26) return true;
  return false;
};
