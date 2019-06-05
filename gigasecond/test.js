/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
const GIGASEC = 1000000000;

const gigasecond = date => {
  const dt = date;
  const dateWithGigaseconds = dt.getSeconds() + GIGASEC;
  dt.setSeconds(dateWithGigaseconds);
  return dt;
};

const gs = gigasecond(new Date(Date.UTC(2015, 8, 14)));
const expectedDate = new Date(Date.UTC(2047, 4, 23, 1, 46, 40));
console.log(gs, expectedDate);
