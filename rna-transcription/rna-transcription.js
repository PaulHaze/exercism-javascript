// create an object to use to 'convert' the letters
const rnaFromDna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

// function to iterate over the string argument 'dna' and convert each letter to its rna equivalent
export const toRna = dna => [...dna].map(x => rnaFromDna[x]).join('');
