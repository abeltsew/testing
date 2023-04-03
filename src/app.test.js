import { stringLength, reverseString, Calculator, capitalize } from './app';

it('should return the corenct length of', () => {
  const len = stringLength('abel');

  expect(len).toBe(4);
});

describe('should return an error', () => {
  it('should return an error if the length is more than 10', () => {
    const len = stringLength('abel is awesome');

    expect(len).toBe('invalid string');
  });

  it('should return an error if the length is not 1 ', () => {
    const len = stringLength('');

    expect(len).toBe('invalid string');
  });
});

describe('should return a reversed string', () => {
  it('should return a reversed string', () => {
    const reversed = reverseString('Abel is awesome');

    expect(reversed).toBe('emosewa si leba');
  });
});

describe('should return the correct operations', () => {
  const operation = new Calculator();

  it('should return the correct sum', () => {
    const sum = operation.add(2, 8);

    expect(sum).toBe(10);
  });

  it('should return the correct diffrenct', () => {
    const diffrence = operation.subtract(10, 2);

    expect(diffrence).toBe(8);
  });

  it('should return the correct product', () => {
    const product = operation.multiply(10, 2);

    expect(product).toBe(20);
  });

  it('should return the correct quotient', () => {
    const quotient = operation.divide(10, 2);

    expect(quotient).toBe(5);
  });
});

describe('should return the capitalized string', () => {
  it('should return the correct capitalized string', () => {
    const capitalized = capitalize('abel');

    expect(capitalized).toBe('Abel');
  });
});
