import {
  unique, shuffle, chunk, flatten, take, drop, max, min,
  groupBy, intersection, difference, sortBy, range, countBy,
  compact, first, last
} from './index';

describe('Array utilities', () => {
  describe('unique', () => {
    it('should remove duplicate elements', () => {
      expect(unique([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
      expect(unique(['a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    it('should throw error for non-array input', () => {
      expect(() => unique('not-array' as any)).toThrow(TypeError);
    });
  });

  describe('shuffle', () => {
    it('should return array with same elements', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = shuffle(original);
      expect(shuffled.sort()).toEqual(original);
      expect(shuffled).not.toBe(original); // Should be a new array
    });

    it('should throw error for non-array input', () => {
      expect(() => shuffle('not-array' as any)).toThrow(TypeError);
    });
  });

  describe('chunk', () => {
    it('should chunk array into smaller arrays', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    it('should throw error for invalid size', () => {
      expect(() => chunk([1, 2, 3], 0)).toThrow();
      expect(() => chunk([1, 2, 3], -1)).toThrow();
      expect(() => chunk([1, 2, 3], 1.5)).toThrow();
    });
  });

  describe('flatten', () => {
    it('should flatten nested arrays', () => {
      expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should respect depth parameter', () => {
      expect(flatten([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
    });

    it('should throw error for non-array input', () => {
      expect(() => flatten('not-array' as any)).toThrow(TypeError);
    });
  });

  describe('take', () => {
    it('should take first n elements', () => {
      expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
      expect(take(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
    });

    it('should handle edge cases', () => {
      expect(take([1, 2, 3], 0)).toEqual([]);
      expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });

    it('should throw error for invalid inputs', () => {
      expect(() => take('not-array' as any, 2)).toThrow(TypeError);
      expect(() => take([1, 2, 3], -1)).toThrow();
    });
  });

  describe('drop', () => {
    it('should drop first n elements', () => {
      expect(drop([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
    });

    it('should handle edge cases', () => {
      expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
      expect(drop([1, 2, 3], 5)).toEqual([]);
    });
  });

  describe('max', () => {
    it('should find maximum value', () => {
      expect(max([1, 5, 3, 9, 2])).toBe(9);
      expect(max([1])).toBe(1);
    });

    it('should return undefined for empty array', () => {
      expect(max([])).toBeUndefined();
    });

    it('should throw error for non-array input', () => {
      expect(() => max('not-array' as any)).toThrow(TypeError);
    });
  });

  describe('min', () => {
    it('should find minimum value', () => {
      expect(min([1, 5, 3, 9, 2])).toBe(1);
      expect(min([5])).toBe(5);
    });

    it('should return undefined for empty array', () => {
      expect(min([])).toBeUndefined();
    });
  });

  describe('first and last', () => {
    it('should get first element', () => {
      expect(first([1, 2, 3])).toBe(1);
      expect(first([])).toBeUndefined();
    });

    it('should get last element', () => {
      expect(last([1, 2, 3])).toBe(3);
      expect(last([])).toBeUndefined();
    });
  });

  describe('countBy', () => {
    it('should count elements with default key function', () => {
      expect(countBy([1, 2, 2, 3, 3, 3])).toEqual({
        '1': 1,
        '2': 2,
        '3': 3
      });
    });

    it('should count elements with custom key function', () => {
      const words = ['apple', 'banana', 'cherry', 'date'];
      expect(countBy(words, word => word.length)).toEqual({
        '4': 1,
        '5': 2,
        '6': 1
      });
    });
  });
});
