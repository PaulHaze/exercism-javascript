const translate = rna => {
  if (!rna) return [];

  let proteins = [];
  let codons = spliceString(rna, 3);

  for (const codon of codons) {
    const protein = codonToProtein(codon);
    if (protein === 'ERR') throw new Error('Invalid codon');
    if (protein === 'STOP') {
      return proteins;
    } else {
      proteins.push(protein);
    }
  }
  return proteins;
};

function spliceString(str, size) {
  let strArray = [];
  let start = 0;
  while (str[start]) {
    strArray.push(str.slice(start, start + 3));
    start += size;
  }
  return strArray;
}

function codonToProtein(codon) {
  switch (codon) {
    case 'UAA':
    case 'UAG':
    case 'UGA':
      return 'STOP';
    case 'AUG':
      return 'Methionine';
    case 'UUU':
    case 'UUC':
      return 'Phenylalanine';
    case 'UUA':
    case 'UUG':
      return 'Leucine';
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
      return 'Serine';
    case 'UAU':
    case 'UAC':
      return 'Tyrosine';
    case 'UGU':
    case 'UGC':
      return 'Cysteine';
    case 'UGG':
      return 'Tryptophan';
    default:
      return 'ERR';
  }
}

export { translate };
