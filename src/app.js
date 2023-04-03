export const stringLength = (string) => {
  if (string.length > 1 && string.length <= 10) {
    return string.length;
  } else {
    return 'invalid string';
  }
};

export const reverseString = (string) =>
  string.toLowerCase().split('').reverse().join('');

export class Calculator {
  add = (a, b) => a + b;
  subtract = (a, b) => a - b;
  divide = (a, b) => a / b;
  multiply = (a, b) => a * b;
}

export const capitalize = (string) => {
  const letters = string.split('');

  letters[0] = letters[0].toUpperCase();

  return letters.join('');
};
