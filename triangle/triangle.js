function isValidTriangle(...args) {
  // sort the triangle sides into ascending order
  const sortedSides = args.sort((numA, numB) => numA - numB);

  // test to make sure all sides are positive by checking the lowest number to be positive
  if (sortedSides[0] <= 0) return false;

  // check the longest side is greater than the sum of the two shortest sides
  if (sortedSides[0] + sortedSides[1] < sortedSides[2]) return false;

  // if it passes all tests, the triangle is valid
  return true;
}

function triangleType(a, b, c) {
  if (!isValidTriangle(a, b, c)) return false;

  // test to see if all sides are equal
  if (a === b && a === c) return 'equilateral';

  // test for isoceles (2 equal sides)
  if (a === b || b === c || a === c) return 'isosceles';

  // if it fails both checks then only remaining valid triangle is scalene
  return 'scalene';
}

export class Triangle {
  constructor(sideA, sideB, sideC) {
    this.type = triangleType(sideA, sideB, sideC);
  }

  kind() {
    if (!this.type) throw new Error('Triangle sides arent valid');
    return this.type;
  }
}
