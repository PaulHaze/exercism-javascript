export const compute = (dnaStrand1, dnaStrand2) => {
  if (dnaStrand1 === '' && dnaStrand2 === '') return 0;
  if (!dnaStrand1) {
    throw new Error('left strand must not be empty');
  }
  if (!dnaStrand2) {
    throw new Error('right strand must not be empty');
  }
  if (dnaStrand1.length !== dnaStrand2.length) {
    throw new Error('left and right strands must be of equal length');
  }
  let count = 0;
  for (let i = 0; i < dnaStrand1.length; i += 1) {
    if (dnaStrand1[i] !== dnaStrand2[i]) count += 1;
  }
  return count;
};
