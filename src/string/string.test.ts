import {
  capitalize,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  truncate,
  stripHtml,
  generateRandomString,
  wordCount,
  reverse,
  isPalindrome
} from './index';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
      expect(capitalize('HELLO')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('toCamelCase', () => {
    it('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
      expect(toCamelCase('my-component-name')).toBe('myComponentName');
    });

    it('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
      expect(toCamelCase('my_variable_name')).toBe('myVariableName');
    });

    it('should convert space-separated to camelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
      expect(toCamelCase('my component name')).toBe('myComponentName');
    });
  });

  describe('toKebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world');
      expect(toKebabCase('myComponentName')).toBe('my-component-name');
    });

    it('should convert snake_case to kebab-case', () => {
      expect(toKebabCase('hello_world')).toBe('hello-world');
      expect(toKebabCase('my_variable_name')).toBe('my-variable-name');
    });
  });

  describe('toSnakeCase', () => {
    it('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
      expect(toSnakeCase('myComponentName')).toBe('my_component_name');
    });

    it('should convert kebab-case to snake_case', () => {
      expect(toSnakeCase('hello-world')).toBe('hello_world');
      expect(toSnakeCase('my-component-name')).toBe('my_component_name');
    });
  });

  describe('truncate', () => {
    it('should truncate string to specified length', () => {
      expect(truncate('Hello world', 8)).toBe('Hello...');
      expect(truncate('Short', 10)).toBe('Short');
    });

    it('should use custom suffix', () => {
      expect(truncate('Hello world', 8, '***')).toBe('Hello***');
    });
  });

  describe('stripHtml', () => {
    it('should remove HTML tags', () => {
      expect(stripHtml('<p>Hello world</p>')).toBe('Hello world');
      expect(stripHtml('<div><span>Text</span></div>')).toBe('Text');
    });
  });

  describe('generateRandomString', () => {
    it('should generate string of specified length', () => {
      const result = generateRandomString(10);
      expect(result).toHaveLength(10);
    });

    it('should use custom charset', () => {
      const result = generateRandomString(5, 'ABC');
      expect(result).toMatch(/^[ABC]{5}$/);
    });
  });



  describe('wordCount', () => {
    it('should count words correctly', () => {
      expect(wordCount('Hello world')).toBe(2);
      expect(wordCount('This is a test')).toBe(4);
      expect(wordCount('')).toBe(0);
    });
  });

  describe('reverse', () => {
    it('should reverse string', () => {
      expect(reverse('hello')).toBe('olleh');
      expect(reverse('12345')).toBe('54321');
    });
  });

  describe('isPalindrome', () => {
    it('should identify palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(isPalindrome('hello')).toBe(false);
    });
  });
}); 