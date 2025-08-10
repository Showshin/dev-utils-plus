/**
 * Object utility functions for common operations
 */

/**
 * Deep clones an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as T;
  }
  
  if (typeof obj === 'object') {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  
  return obj;
}

/**
 * Merges multiple objects deeply
 */
export function deepMerge<T extends Record<string, any>>(...objects: T[]): T {
  if (objects.length === 0) return {} as T;
  if (objects.length === 1) return objects[0] || {} as T;
  
  return objects.reduce((result, obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          const existingValue = result[key];
          if (existingValue && typeof existingValue === 'object' && !Array.isArray(existingValue)) {
            result[key] = deepMerge(existingValue, obj[key]) as T[Extract<keyof T, string>];
          } else {
            result[key] = deepMerge({}, obj[key]) as T[Extract<keyof T, string>];
          }
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }, {} as T);
}

/**
 * Picks specific keys from an object
 */
export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Omits specific keys from an object
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}

/**
 * Checks if an object is empty
 */
export function isEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * Gets nested object property value using dot notation
 */
export function get<T>(
  obj: Record<string, any>,
  path: string,
  defaultValue?: T
): T | undefined {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }
  
  return result as T;
}

/**
 * Sets nested object property value using dot notation
 */
export function set<T extends Record<string, any>>(
  obj: T,
  path: string,
  value: any
): T {
  const keys = path.split('.');
  const result = { ...obj };
  let current: any = result;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (key && (!(key in current) || typeof current[key] !== 'object')) {
      current[key] = {};
    }
    if (key) {
      current = current[key];
    }
  }
  
  const lastKey = keys[keys.length - 1];
  if (lastKey) {
    current[lastKey] = value;
  }
  return result;
}

/**
 * Flattens a nested object into a single level
 */
export function flattenObject(
  obj: Record<string, any>,
  prefix = '',
  separator = '.'
): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}${separator}${key}` : key;
      
      if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        Object.assign(result, flattenObject(obj[key], newKey, separator));
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  
  return result;
}

/**
 * Inverts object keys and values
 */
export function invert<T extends Record<string, any>>(obj: T): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[String(obj[key])] = key;
    }
  }
  return result;
}

/**
 * Creates an object from an array of key-value pairs
 */
export function fromEntries<K extends string | number, V>(
  entries: [K, V][]
): Record<K, V> {
  const result = {} as Record<K, V>;
  entries.forEach(([key, value]) => {
    result[key] = value;
  });
  return result;
}

/**
 * Converts an object to an array of key-value pairs
 */
export function entries<K extends string | number, V>(
  obj: Record<K, V>
): [K, V][] {
  return Object.entries(obj) as [K, V][];
}

/**
 * Maps object values using a transformation function
 */
export function mapValues<T, U>(
  obj: Record<string, T>,
  fn: (value: T, key: string) => U
): Record<string, U> {
  const result: Record<string, U> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value !== undefined) {
        result[key] = fn(value, key);
      }
    }
  }
  return result;
} 