/**
 * Crypto utility functions for common cryptographic operations
 */

/**
 * Generates a random string of specified length
 */
export function randomString(length: number, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

/**
 * Generates a random number between min and max (inclusive)
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random UUID v4
 */
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Creates a simple hash from a string
 */
export function simpleHash(str: string): number {
  let hash = 0;
  if (str.length === 0) return hash;
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash);
}

/**
 * Encodes a string to base64
 */
export function toBase64(str: string): string {
  if (typeof btoa !== 'undefined') {
    return btoa(str);
  }
  
  // Fallback for Node.js
  return Buffer.from(str).toString('base64');
}

/**
 * Decodes a base64 string
 */
export function fromBase64(str: string): string {
  if (typeof atob !== 'undefined') {
    return atob(str);
  }
  
  // Fallback for Node.js
  return Buffer.from(str, 'base64').toString();
}

/**
 * Encodes a string to URL-safe base64
 */
export function toBase64Url(str: string): string {
  return toBase64(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

/**
 * Decodes a URL-safe base64 string
 */
export function fromBase64Url(str: string): string {
  // Add padding back
  while (str.length % 4) {
    str += '=';
  }
  
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  return fromBase64(str);
}

/**
 * Creates a checksum hash from a string
 */
export function checksum(str: string): string {
  let hash = 0;
  if (str.length === 0) return hash.toString();
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  return hash.toString(16);
}

/**
 * Generates a random hex string
 */
export function randomHex(length: number): string {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generates a random alphanumeric string
 */
export function randomAlphanumeric(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generates a random numeric string
 */
export function randomNumeric(length: number): string {
  const chars = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generates a random password with specified requirements
 */
export function generatePassword(options: {
  length?: number;
  includeUppercase?: boolean;
  includeLowercase?: boolean;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
} = {}): string {
  const {
    length = 12,
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = true
  } = options;
  
  let chars = '';
  if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) chars += '0123456789';
  if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  if (chars.length === 0) {
    throw new Error('At least one character type must be included');
  }
  
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
} 