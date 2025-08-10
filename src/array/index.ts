/**
 * Array utility functions for common operations
 */

/**
 * Removes duplicate elements from an array
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/**
 * Shuffles an array in place using Fisher-Yates algorithm
 */
export function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    const jValue = shuffled[j];
    if (temp !== undefined && jValue !== undefined) {
      shuffled[i] = jValue;
      shuffled[j] = temp;
    }
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
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Flattens a nested array to a single level
 */
export function flatten<T>(arr: T[]): T[] {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, [] as T[]);
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
 */
export function countBy<T>(arr: T[]): Record<string, number> {
  return arr.reduce((counts, item) => {
    const key = String(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
}

/**
 * Removes falsy values from an array
 */
export function compact<T>(arr: T[]): T[] {
  return arr.filter(Boolean);
}

/**
 * Gets the last element of an array
 */
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

/**
 * Gets the first element of an array
 */
export function first<T>(arr: T[]): T | undefined {
  return arr[0];
} 