/* eslint-disable arrow-parens */
const GIGASEC = 1000000000;

export const gigasecond = date => {
  // const dateWithGigaseconds = date.getSeconds() + GIGASEC;
  // date.setSeconds(dateWithGigaseconds);
  // return date;
  const dt = date;
  const dateWithGigaseconds = dt.getSeconds() + GIGASEC;
  dt.setSeconds(dateWithGigaseconds);
  return dt;
};
