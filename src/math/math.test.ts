import {
  clamp, lerp, mapRange, isBetween, roundTo, percentage,
  factorial, gcd, lcm, isPrime, generatePrimes, sum, average,
  median, mode, standardDeviation, variance, randomInt, randomFloat,
  distance, degreesToRadians, radiansToDegrees, nthRoot, binomial
} from './index';

describe('Math utilities', () => {
  describe('clamp', () => {
    it('should clamp values within range', () => {
      expect(clamp(10, 0, 5)).toBe(5);
      expect(clamp(-5, 0, 5)).toBe(0);
      expect(clamp(3, 0, 5)).toBe(3);
    });

    it('should throw error for invalid inputs', () => {
      expect(() => clamp('5' as any, 0, 10)).toThrow(TypeError);
      expect(() => clamp(5, 10, 0)).toThrow('min cannot be greater than max');
    });
  });

  describe('isBetween', () => {
    it('should check if value is between min and max', () => {
      expect(isBetween(5, 1, 10)).toBe(true);
      expect(isBetween(0, 1, 10)).toBe(false);
      expect(isBetween(1, 1, 10)).toBe(true);
      expect(isBetween(10, 1, 10)).toBe(true);
    });

    it('should throw error for invalid inputs', () => {
      expect(() => isBetween('5' as any, 1, 10)).toThrow(TypeError);
      expect(() => isBetween(5, 10, 1)).toThrow('min cannot be greater than max');
    });
  });

  describe('roundTo', () => {
    it('should round to specified decimal places', () => {
      expect(roundTo(3.14159, 2)).toBe(3.14);
      expect(roundTo(1.235, 2)).toBe(1.24);
      expect(roundTo(10, 0)).toBe(10);
    });

    it('should throw error for invalid decimals', () => {
      expect(() => roundTo(3.14, -1)).toThrow();
      expect(() => roundTo(3.14, 1.5)).toThrow();
    });
  });

  describe('percentage', () => {
    it('should calculate percentage', () => {
      expect(percentage(25, 100)).toBe(25);
      expect(percentage(1, 4)).toBe(25);
      expect(percentage(0, 100)).toBe(0);
    });

    it('should handle division by zero', () => {
      expect(percentage(10, 0)).toBe(0);
    });
  });

  describe('factorial', () => {
    it('should calculate factorial', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
    });

    it('should return NaN for negative numbers', () => {
      expect(factorial(-1)).toBe(NaN);
    });
  });

  describe('gcd and lcm', () => {
    it('should calculate greatest common divisor', () => {
      expect(gcd(12, 18)).toBe(6);
      expect(gcd(17, 19)).toBe(1);
    });

    it('should calculate least common multiple', () => {
      expect(lcm(12, 18)).toBe(36);
      expect(lcm(4, 6)).toBe(12);
    });
  });

  describe('isPrime', () => {
    it('should check if number is prime', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });
  });

  describe('statistical functions', () => {
    const numbers = [1, 2, 3, 4, 5];

    it('should calculate sum', () => {
      expect(sum(numbers)).toBe(15);
      expect(sum([])).toBe(0);
    });

    it('should calculate average', () => {
      expect(average(numbers)).toBe(3);
      expect(average([])).toBe(0);
    });

    it('should calculate median', () => {
      expect(median([1, 2, 3, 4, 5])).toBe(3);
      expect(median([1, 2, 3, 4])).toBe(2.5);
      expect(median([])).toBe(0);
    });

    it('should calculate mode', () => {
      expect(mode([1, 2, 2, 3, 3, 3])).toEqual([3]);
      expect(mode([1, 1, 2, 2])).toEqual([1, 2]);
      expect(mode([])).toEqual([]);
    });
  });

  describe('randomInt', () => {
    it('should generate random integer within range', () => {
      const result = randomInt(1, 10);
      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });

    it('should throw error for invalid inputs', () => {
      expect(() => randomInt(1.5, 10)).toThrow('Arguments must be integers');
      expect(() => randomInt(10, 1)).toThrow('min cannot be greater than max');
    });
  });

  describe('randomFloat', () => {
    it('should generate random float within range', () => {
      const result = randomFloat(1, 5);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThan(5);
    });

    it('should throw error for invalid inputs', () => {
      expect(() => randomFloat(5, 1)).toThrow('min must be less than max');
    });
  });

  describe('distance', () => {
    it('should calculate distance between points', () => {
      expect(distance(0, 0, 3, 4)).toBe(5);
      expect(distance(1, 1, 1, 1)).toBe(0);
    });

    it('should throw error for non-number inputs', () => {
      expect(() => distance('0' as any, 0, 3, 4)).toThrow(TypeError);
    });
  });

  describe('angle conversions', () => {
    it('should convert degrees to radians', () => {
      expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
      expect(degreesToRadians(90)).toBeCloseTo(Math.PI / 2);
    });

    it('should convert radians to degrees', () => {
      expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
      expect(radiansToDegrees(Math.PI / 2)).toBeCloseTo(90);
    });
  });

  describe('nthRoot', () => {
    it('should calculate nth root', () => {
      expect(nthRoot(8, 3)).toBeCloseTo(2);
      expect(nthRoot(16, 4)).toBeCloseTo(2);
    });

    it('should throw error for zero root degree', () => {
      expect(() => nthRoot(8, 0)).toThrow('Root degree cannot be zero');
    });
  });

  describe('binomial', () => {
    it('should calculate binomial coefficient', () => {
      expect(binomial(5, 2)).toBe(10);
      expect(binomial(10, 3)).toBe(120);
      expect(binomial(5, 0)).toBe(1);
      expect(binomial(5, 5)).toBe(1);
    });

    it('should handle edge cases', () => {
      expect(binomial(5, 6)).toBe(0);
    });

    it('should throw error for invalid inputs', () => {
      expect(() => binomial(-1, 2)).toThrow();
      expect(() => binomial(5, -1)).toThrow();
      expect(() => binomial(1.5, 2)).toThrow();
    });
  });
});
