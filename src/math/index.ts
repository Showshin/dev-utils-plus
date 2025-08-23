/**
 * Math utility functions for common mathematical operations
 */

/**
 * Clamps a number between min and max values
 * @param value - The number to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped number between min and max
 * @example
 * clamp(10, 0, 5) // 5
 * clamp(-5, 0, 5) // 0
 * clamp(3, 0, 5) // 3
 */
export function clamp(value: number, min: number, max: number): number {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (min > max) {
    throw new Error('min cannot be greater than max');
  }
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation between two values
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Maps a value from one range to another
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Checks if a number is between two values (inclusive)
 * @param value - The number to check
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns True if value is between min and max
 * @example
 * isBetween(5, 1, 10) // true
 * isBetween(0, 1, 10) // false
 */
export function isBetween(value: number, min: number, max: number): boolean {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (min > max) {
    throw new Error('min cannot be greater than max');
  }
  return value >= min && value <= max;
}

/**
 * Rounds a number to a specified number of decimal places
 * @param value - The number to round
 * @param decimals - Number of decimal places (must be non-negative integer)
 * @returns Rounded number
 * @example
 * roundTo(3.14159, 2) // 3.14
 * roundTo(1.235, 2) // 1.24
 */
export function roundTo(value: number, decimals: number): number {
  if (typeof value !== 'number' || typeof decimals !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (!Number.isInteger(decimals) || decimals < 0) {
    throw new Error('Decimals must be a non-negative integer');
  }
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

/**
 * Calculates the percentage of a value relative to a total
 */
export function percentage(value: number, total: number): number {
  if (total === 0) return 0;
  return (value / total) * 100;
}

/**
 * Calculates the factorial of a number
 */
export function factorial(n: number): number {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Calculates the greatest common divisor of two numbers
 */
export function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Calculates the least common multiple of two numbers
 */
export function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * Checks if a number is prime
 */
export function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Generates an array of prime numbers up to a limit
 */
export function generatePrimes(limit: number): number[] {
  const sieve = new Array(limit + 1).fill(true);
  sieve[0] = sieve[1] = false;
  
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }
  
  return sieve
    .map((isPrime, index) => isPrime ? index : null)
    .filter((num): num is number => num !== null);
}

/**
 * Calculates the sum of an array of numbers
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

/**
 * Calculates the average of an array of numbers
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

/**
 * Calculates the median of an array of numbers
 */
export function median(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
    const mid1 = sorted[mid - 1];
    const mid2 = sorted[mid];
    if (mid1 !== undefined && mid2 !== undefined) {
      return (mid1 + mid2) / 2;
    }
  }
  
  const midValue = sorted[mid];
  return midValue !== undefined ? midValue : 0;
}

/**
 * Calculates the mode of an array of numbers
 */
export function mode(numbers: number[]): number[] {
  if (numbers.length === 0) return [];
  
  const frequency: Record<number, number> = {};
  let maxFreq = 0;
  
  numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    maxFreq = Math.max(maxFreq, frequency[num]);
  });
  
  return Object.entries(frequency)
    .filter(([, freq]) => freq === maxFreq)
    .map(([num]) => parseInt(num));
}

/**
 * Calculates the standard deviation of an array of numbers
 */
export function standardDeviation(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  
  const avg = average(numbers);
  const squaredDiffs = numbers.map(num => Math.pow(num - avg, 2));
  const variance = average(squaredDiffs);
  
  return Math.sqrt(variance);
}

/**
 * Calculates the variance of an array of numbers
 */
export function variance(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  
  const avg = average(numbers);
  const squaredDiffs = numbers.map(num => Math.pow(num - avg, 2));
  
  return average(squaredDiffs);
}

/**
 * Generates a random integer between min and max (inclusive)
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random integer between min and max
 * @example
 * randomInt(1, 10) // 7 (random integer between 1 and 10)
 */
export function randomInt(min: number, max: number): number {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('Arguments must be integers');
  }
  if (min > max) {
    throw new Error('min cannot be greater than max');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random float between min and max
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (exclusive)
 * @returns Random float between min and max
 * @example
 * randomFloat(1, 5) // 3.742891
 */
export function randomFloat(min: number, max: number): number {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (min >= max) {
    throw new Error('min must be less than max');
  }
  return Math.random() * (max - min) + min;
}

/**
 * Calculates the distance between two points
 * @param x1 - First point x coordinate
 * @param y1 - First point y coordinate
 * @param x2 - Second point x coordinate
 * @param y2 - Second point y coordinate
 * @returns Distance between the two points
 * @example
 * distance(0, 0, 3, 4) // 5
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
  if (typeof x1 !== 'number' || typeof y1 !== 'number' || 
      typeof x2 !== 'number' || typeof y2 !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Converts degrees to radians
 * @param degrees - Angle in degrees
 * @returns Angle in radians
 * @example
 * degreesToRadians(180) // 3.141592653589793
 */
export function degreesToRadians(degrees: number): number {
  if (typeof degrees !== 'number') {
    throw new TypeError('Expected a number');
  }
  return degrees * (Math.PI / 180);
}

/**
 * Converts radians to degrees
 * @param radians - Angle in radians
 * @returns Angle in degrees
 * @example
 * radiansToDegrees(Math.PI) // 180
 */
export function radiansToDegrees(radians: number): number {
  if (typeof radians !== 'number') {
    throw new TypeError('Expected a number');
  }
  return radians * (180 / Math.PI);
}

/**
 * Calculates the nth root of a number
 * @param value - The number to find the root of
 * @param n - The root degree
 * @returns The nth root of the value
 * @example
 * nthRoot(8, 3) // 2 (cube root of 8)
 * nthRoot(16, 4) // 2 (4th root of 16)
 */
export function nthRoot(value: number, n: number): number {
  if (typeof value !== 'number' || typeof n !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (n === 0) {
    throw new Error('Root degree cannot be zero');
  }
  return Math.pow(value, 1 / n);
}

/**
 * Calculates the binomial coefficient (n choose k)
 * @param n - Total number of items
 * @param k - Number of items to choose
 * @returns Binomial coefficient
 * @example
 * binomial(5, 2) // 10
 * binomial(10, 3) // 120
 */
export function binomial(n: number, k: number): number {
  if (typeof n !== 'number' || typeof k !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (!Number.isInteger(n) || !Number.isInteger(k) || n < 0 || k < 0) {
    throw new Error('Arguments must be non-negative integers');
  }
  if (k > n) return 0;
  if (k === 0 || k === n) return 1;
  
  // Optimize by using the smaller of k and n-k
  k = Math.min(k, n - k);
  
  let result = 1;
  for (let i = 0; i < k; i++) {
    result *= (n - i) / (i + 1);
  }
  
  return Math.round(result);
} 