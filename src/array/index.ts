/**
 * Array utility functions for common operations
 */

/**
 * Removes duplicate elements from an array
 * @param arr - The array to remove duplicates from
 * @returns A new array with unique elements
 * @example
 * unique([1, 2, 2, 3, 3, 4]) // [1, 2, 3, 4]
 */
export function unique<T>(arr: T[]): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return [...new Set(arr)];
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param arr - The array to shuffle
 * @returns A new shuffled array
 * @example
 * shuffle([1, 2, 3, 4]) // [3, 1, 4, 2] (random order)
 */
export function shuffle<T>(arr: T[]): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
}

/**
 * Groups array elements by a key function
 */
export function groupBy<T, K extends string | number>(
  arr: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return arr.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<K, T[]>);
}

/**
 * Chunks an array into smaller arrays of specified size
 * @param arr - The array to chunk
 * @param size - The size of each chunk (must be positive integer)
 * @returns Array of chunked arrays
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error('Size must be a positive integer');
  }
  
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Flattens a nested array to a single level
 * @param arr - The array to flatten
 * @param depth - Maximum depth to flatten (default: Infinity)
 * @returns A new flattened array
 * @example
 * flatten([1, [2, 3], [4, [5, 6]]]) // [1, 2, 3, 4, 5, 6]
 * flatten([1, [2, [3, [4]]]], 2) // [1, 2, 3, [4]]
 */
export function flatten<T>(arr: T[], depth: number = Infinity): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  
  function flattenRecursive(array: any[], currentDepth: number): T[] {
    const result: T[] = [];
    for (const item of array) {
      if (Array.isArray(item) && currentDepth > 0) {
        result.push(...flattenRecursive(item, currentDepth - 1));
      } else {
        result.push(item);
      }
    }
    return result;
  }
  
  return flattenRecursive(arr, depth);
}

/**
 * Finds the intersection of multiple arrays
 */
export function intersection<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0] || [];
  
  return arrays.reduce((intersect, arr) => {
    return intersect.filter(item => arr.includes(item));
  });
}

/**
 * Finds the difference between two arrays
 */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(item => !arr2.includes(item));
}

/**
 * Sorts an array of objects by a specific key
 */
export function sortBy<T>(
  arr: T[],
  key: keyof T,
  direction: 'asc' | 'desc' = 'asc'
): T[] {
  return [...arr].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Creates a range of numbers
 */
export function range(start: number, end: number, step = 1): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * Counts occurrences of elements in an array
 * @param arr - The array to count elements from
 * @param keyFn - Optional function to generate custom keys
 * @returns Object with element counts
 * @example
 * countBy([1, 2, 2, 3, 3, 3]) // {'1': 1, '2': 2, '3': 3}
 * countBy(['apple', 'banana', 'apple'], x => x.length) // {'5': 2, '6': 1}
 */
export function countBy<T, K extends string | number = string>(
  arr: T[], 
  keyFn: (item: T) => K = (item: T) => String(item) as K
): Record<K, number> {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  
  return arr.reduce((counts, item) => {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {} as Record<K, number>);
}

/**
 * Removes falsy values from an array
 */
export function compact<T>(arr: T[]): T[] {
  return arr.filter(Boolean);
}

/**
 * Gets the last element of an array
 * @param arr - The array to get the last element from
 * @returns The last element or undefined if array is empty
 * @example
 * last([1, 2, 3]) // 3
 * last([]) // undefined
 */
export function last<T>(arr: T[]): T | undefined {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr[arr.length - 1];
}

/**
 * Gets the first element of an array
 * @param arr - The array to get the first element from
 * @returns The first element or undefined if array is empty
 * @example
 * first([1, 2, 3]) // 1
 * first([]) // undefined
 */
export function first<T>(arr: T[]): T | undefined {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr[0];
}

/**
 * Takes the first n elements from an array
 * @param arr - The array to take elements from
 * @param n - Number of elements to take
 * @returns Array with first n elements
 * @example
 * take([1, 2, 3, 4, 5], 3) // [1, 2, 3]
 */
export function take<T>(arr: T[], n: number): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n must be a non-negative integer');
  }
  return arr.slice(0, n);
}

/**
 * Drops the first n elements from an array
 * @param arr - The array to drop elements from
 * @param n - Number of elements to drop
 * @returns Array with first n elements removed
 * @example
 * drop([1, 2, 3, 4, 5], 2) // [3, 4, 5]
 */
export function drop<T>(arr: T[], n: number): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n must be a non-negative integer');
  }
  return arr.slice(n);
}

/**
 * Finds the maximum element in an array
 * @param arr - Array of numbers
 * @returns Maximum value or undefined if empty
 * @example
 * max([1, 5, 3, 9, 2]) // 9
 */
export function max(arr: number[]): number | undefined {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}

/**
 * Finds the minimum element in an array
 * @param arr - Array of numbers
 * @returns Minimum value or undefined if empty
 * @example
 * min([1, 5, 3, 9, 2]) // 1
 */
export function min(arr: number[]): number | undefined {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (arr.length === 0) return undefined;
  return Math.min(...arr);
} 