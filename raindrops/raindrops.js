const calculateFactors = num => {
  let factorArray = [1];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) factorArray.push(i);
  }
  return factorArray;
};

const plingObj = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
};

export const convert = num => {
  const result = calculateFactors(num)
    .map(x => plingObj[x])
    .join('');
  return result || num.toString();
};
