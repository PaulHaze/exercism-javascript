/* eslint-disable indent */
export const isLeap = (yearToTest) => {
    if (yearToTest.isNaN || yearToTest % 4 !== 0) {
        return false;
    }
    if (yearToTest % 100 === 0 && yearToTest % 400 !== 0) {
        return false;
    }
    return true;
};
