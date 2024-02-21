import { getPercents } from '../../utils/getPercents.js';

describe("tests for getPercents function", () => {
  it("should calculate percentages correctly", () => {
    expect(getPercents(30, 200)).toBe(60);
  });

  it("should throw an error for invalid input - percent as a string", () => {
    expect(() => getPercents("30", 200)).toThrow('Invalid input: percent and number must be numbers');
  });

  it("should throw an error for invalid input - number as null", () => {
    expect(() => getPercents(30, null)).toThrow('Invalid input: percent and number must be numbers');
  });
});

describe("tests for getPercents function corner cases", () => {
    it("should calculate percentage of 0 correctly", () => {
      expect(getPercents(0, 200)).toBe(0);
    });
  
    it("should calculate percentage of 0 number correctly", () => {
      expect(getPercents(100, 0)).toBe(0);
    });
  
    it("should calculate percentage of Infinity correctly", () => {
      expect(getPercents(100, Infinity)).toBe(Infinity);
    });
  });