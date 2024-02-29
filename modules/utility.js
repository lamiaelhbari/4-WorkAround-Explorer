// 10- Define and export a function:

export const formatNumber = (number) => {
  // Get rid of the decimals and convert to a string.
  let numberToString = String(Math.floor(number));
  // Starting 3 from the end, add a comma every 3 digits.
  for (let i = numberToString.length - 3; i > 0; i -= 3) {
    numberToString = numberToString.slice(0, i) + "," + numberToString.slice(i);
  }
  return numberToString;
};
