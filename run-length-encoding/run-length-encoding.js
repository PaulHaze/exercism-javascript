const encode = stringToEncode => {
  let encodedString = '';
  let count = 0;

  // convert string arg to array to iterate over using
  // array destructuring and the spread operator
  const stringArray = [...stringToEncode];

  // iterate over the string array and test for matching letters
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i + 1]) {
      count += 1;
    }
    if (stringArray[i] !== stringArray[i + 1] && count > 0) {
      encodedString += `${count + 1}${stringArray[i]}`;
      count = 0;
    } else if (stringArray[i] !== stringArray[i + 1]) {
      encodedString += stringArray[i];
    }
  }
  return encodedString;
};

const decode = stringToDecode => {
  let decodedString = '';
  let count = '';
  const stringArray = [...stringToDecode];

  // iterate over the string array and build the return string
  for (let i = 0; i < stringArray.length; i++) {
    // check if its a number and add it to the count total if it is
    if (Number(stringArray[i])) {
      count += stringArray[i];
    } else if (isNaN(stringArray[i]) || stringArray[i] === ' ') {
      // Test if count is empty and if so return a single instance
      // if not, convert the count to an int and repeat by that amount
      count === ''
        ? (decodedString += stringArray[i])
        : (decodedString += stringArray[i].repeat(parseInt(count)));

      // reset the count ready for the next input
      count = '';
    }
  }
  return decodedString;
};

export { encode, decode };
