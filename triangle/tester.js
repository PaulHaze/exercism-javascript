// const Triangle = (a, b, c) => {
//   // first test if all sides are equal as it will reduce the amount of other checks needed
//   if (a === b && a === c) {
//     return 'equilateral';
//   }
//   if (a === b || b === c || a === c) {
//     return 'isosceles';
//   }
//   return 'scalene';
// };

// const equal = Triangle(2, 2, 2);
// console.log(equal);

let arr = [10, 1, 3];
let arrSorted = arr.sort();
console.log(arrSorted);
let maxNum = arrSorted.pop();
let remainingSum = arrSorted.reduce((total, num) => total + num);
console.log(arrSorted, maxNum, remainingSum);
