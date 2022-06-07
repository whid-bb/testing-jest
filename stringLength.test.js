const string = require('./stringLength');
const CalcCls = require('./Calc.js');

const calc = new CalcCls();


// import { stringLength } from './stringLength.js';

it('word halo', () => {
  expect(string.stringLength('halo')).toBe(4);
});
it('word onetwoone', () => {
  expect(string.stringLength('onetwoone')).toBe(9);
});
it('word to long', () => {
  expect(() => {
    string.stringLength('onetwooasdasfsa');
  }).toThrow('Please provide string between 1 - 10 chars long');
});

// String reverse

it('String reverse', () => {
  expect(string.stringReverse('halooooo')).toBe('halooooo'.split("").reverse().join(''));
});
describe('calculator add', () => {
  it('10 + 2', () => {
    expect(calc.add(10, 2)).toBe(12);
  });
  it('13 + 4', () => {
    expect(calc.add(13, 4)).toBe(17);
  });
  it('22 + 33', () => {
    expect(calc.add(22, 33)).toBe(55);
  });
});
describe('calculator subtraction', () => {
  it('10 - 2', () => {
    expect(calc.subtract(10, 2)).toBe(8);
  });
  it('100 - 88', () => {
    expect(calc.subtract(100, 88)).toBe(12);
  });
  it('44 - 4', () => {
    expect(calc.subtract(44, 4)).toBe(40);
  });
});
describe('calculator division', () => {
  it('10 / 2', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });
  it('20 / 5', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });
  it('100 / 20', () => {
    expect(calc.divide(100, 20)).toBe(5);
  });
});

describe('calculator multiplication', () => {
  it('10 * 2', () => {
    expect(calc.multiply(10, 2)).toBe(20);
  });
  it('4 * 4', () => {
    expect(calc.multiply(4, 4)).toBe(16);
  });
  it('50 * 100', () => {
    expect(calc.multiply(50, 100)).toBe(5000);
  });
});

it('first letter capitalized', () => {
  expect(string.capitalizeLetter('mariano')).toBe('Mariano');
});
