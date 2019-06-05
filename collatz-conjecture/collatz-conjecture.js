/* eslint-disable arrow-parens */

export const steps = num => {
  if (num < 1) {
    throw new Error('Only positive numbers are allowed');
  }
  let count = 0;
  let targetNumber = num;
  while (targetNumber !== 1) {
    targetNumber = targetNumber % 2 ? targetNumber * 3 + 1 : targetNumber / 2;
    count += 1;
  }
  return count;
};
