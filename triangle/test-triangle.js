export const testTriangle = (a, b, c) => {
  if (!a > 0 || !b > 0 || !c > 0) {
    return false;
  }

  let longestSide = a;
  if (b > longestSide) {
    longestSide = b;
  } else if (c > b) {
    longestSide = c;
  }
  const sumOfSides = (a + b + c) - longestSide;

  if (!sumOfSides >= longestSide) {
    return false;
  }
  return true;
};
