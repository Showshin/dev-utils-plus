/**
 * String utility functions for common web development tasks
 */

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns String with first letter capitalized
 * @example
 * capitalize('hello world') // 'Hello world'
 * capitalize('HELLO') // 'Hello'
 */
export function capitalize(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts a string to camelCase
 * @param str - The string to convert
 * @returns String in camelCase format
 * @example
 * toCamelCase('hello-world') // 'helloWorld'
 * toCamelCase('hello_world') // 'helloWorld'
 * toCamelCase('hello world') // 'helloWorld'
 */
export function toCamelCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (_, c) => c.toLowerCase());
}

/**
 * Converts a string to kebab-case
 * @param str - The string to convert
 * @returns String in kebab-case format
 * @example
 * toKebabCase('HelloWorld') // 'hello-world'
 * toKebabCase('hello_world') // 'hello-world'
 * toKebabCase('hello world') // 'hello-world'
 */
export function toKebabCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to snake_case
 * @param str - The string to convert
 * @returns String in snake_case format
 * @example
 * toSnakeCase('HelloWorld') // 'hello_world'
 * toSnakeCase('hello-world') // 'hello_world'
 * toSnakeCase('hello world') // 'hello_world'
 */
export function toSnakeCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param str - The string to truncate
 * @param length - Maximum length of the result string
 * @param suffix - String to append when truncated (default: '...')
 * @returns Truncated string with suffix if needed
 * @example
 * truncate('Hello World', 8) // 'Hello...'
 * truncate('Hello World', 8, '~') // 'Hello W~'
 */
export function truncate(str: string, length: number, suffix = '...'): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  if (!Number.isInteger(length) || length < 0) {
    throw new Error('Length must be a non-negative integer');
  }
  if (str.length <= length) return str;
  return str.substring(0, Math.max(0, length - suffix.length)) + suffix;
}

/**
 * Removes HTML tags from a string
 * @param html - The HTML string to strip tags from
 * @returns String with HTML tags removed
 * @example
 * stripHtml('<p>Hello <strong>world</strong></p>') // 'Hello world'
 */
export function stripHtml(html: string): string {
  if (typeof html !== 'string') {
    throw new TypeError('Expected a string');
  }
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Generates a random string of specified length
 * @param length - Length of the random string to generate
 * @param charset - Characters to use for generation (default: alphanumeric)
 * @returns Random string of specified length
 * @example
 * generateRandomString(8) // 'Kj3mN9qP'
 * generateRandomString(4, '0123456789') // '7294'
 */
export function generateRandomString(length: number, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  if (!Number.isInteger(length) || length < 0) {
    throw new Error('Length must be a non-negative integer');
  }
  if (typeof charset !== 'string' || charset.length === 0) {
    throw new Error('Charset must be a non-empty string');
  }
  
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}



/**
 * Counts the number of words in a string
 * @param str - The string to count words in
 * @returns Number of words in the string
 * @example
 * wordCount('Hello world from JavaScript') // 4
 * wordCount('  hello   world  ') // 2
 */
export function wordCount(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  if (!str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}

/**
 * Reverses a string
 * @param str - The string to reverse
 * @returns Reversed string
 * @example
 * reverse('hello') // 'olleh'
 * reverse('12345') // '54321'
 */
export function reverse(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome
 * @param str - The string to check
 * @returns True if the string is a palindrome
 * @example
 * isPalindrome('A man a plan a canal Panama') // true
 * isPalindrome('race a car') // false
 */
export function isPalindrome(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverse(cleaned);
}

/**
 * Converts string to PascalCase
 * @param str - The string to convert
 * @returns String in PascalCase format
 * @example
 * toPascalCase('hello-world') // 'HelloWorld'
 * toPascalCase('hello_world') // 'HelloWorld'
 */
export function toPascalCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return toCamelCase(str).replace(/^(.)/, (_, c) => c.toUpperCase());
}

/**
 * Removes extra whitespace and trims the string
 * @param str - The string to clean
 * @returns Cleaned string with normalized whitespace
 * @example
 * cleanWhitespace('  hello   world  ') // 'hello world'
 */
export function cleanWhitespace(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.trim().replace(/\s+/g, ' ');
}

/**
 * Escapes HTML characters in a string
 * @param str - The string to escape
 * @returns HTML-escaped string
 * @example
 * escapeHtml('<div>Hello & goodbye</div>') // '&lt;div&gt;Hello &amp; goodbye&lt;/div&gt;'
 */
export function escapeHtml(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;'
  };
  return str.replace(/[&<>"']/g, char => htmlEscapes[char] || char);
}

/**
 * Unescapes HTML entities in a string
 * @param str - The string to unescape
 * @returns HTML-unescaped string
 * @example
 * unescapeHtml('&lt;div&gt;Hello &amp; goodbye&lt;/div&gt;') // '<div>Hello & goodbye</div>'
 */
export function unescapeHtml(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  const htmlUnescapes: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'"
  };
  return str.replace(/&(?:amp|lt|gt|quot|#x27);/g, entity => htmlUnescapes[entity] || entity);
}

/**
 * Converts a string to title case
 * @param str - The string to convert
 * @returns String in title case
 * @example
 * toTitleCase('hello world from javascript') // 'Hello World From Javascript'
 */
export function toTitleCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Checks if string contains only letters
 * @param str - The string to check
 * @returns True if string contains only letters
 * @example
 * isAlpha('hello') // true
 * isAlpha('hello123') // false
 */
export function isAlpha(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * Checks if string contains only alphanumeric characters
 * @param str - The string to check
 * @returns True if string contains only alphanumeric characters
 * @example
 * isAlphanumeric('hello123') // true
 * isAlphanumeric('hello-123') // false
 */
export function isAlphanumeric(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * Pads a string to a certain length with characters
 * @param str - The string to pad
 * @param targetLength - The length of the resulting string
 * @param padString - The string to pad with (default: ' ')
 * @param padStart - Whether to pad at start (true) or end (false)
 * @returns Padded string
 * @example
 * padString('5', 3, '0', true) // '005'
 * padString('hello', 8, '!', false) // 'hello!!!'
 */
export function padString(str: string, targetLength: number, padString = ' ', padStart = true): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  if (!Number.isInteger(targetLength) || targetLength < 0) {
    throw new Error('Target length must be a non-negative integer');
  }
  
  return padStart 
    ? str.padStart(targetLength, padString)
    : str.padEnd(targetLength, padString);
} 