# dev-utils-plus

[![npm version](https://img.shields.io/npm/v/dev-utils-plus)](https://www.npmjs.com/package/dev-utils-plus)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)](https://www.typescriptlang.org/)

Type-safe utility functions for JavaScript/TypeScript: string, array, object, date, validation, crypto, format, math. Clean APIs, strict types, zero runtime dependencies, and tree-shakable builds.

## Features

- **Type-safe utilities**: built with TypeScript, `.d.ts` included
- **Zero dependencies**: lightweight and fast
- **Tree-shakable**: import only what you need
- **Node + Browser**: works across environments
- **Broad coverage**: string, array, object, date, validation, crypto, format, math
- **Lodash alternative**: modern, modular helper functions
- **Enhanced error handling**: comprehensive input validation with descriptive error messages
- **Improved performance**: optimized algorithms and better memory usage
- **Rich documentation**: detailed JSDoc comments with examples for every function

## Install

```bash
npm i dev-utils-plus
# or
pnpm add dev-utils-plus
# or
yarn add dev-utils-plus
```

## Quick start

```ts
import { 
  // string
  capitalize, 
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  toPascalCase,
  escapeHtml,
  cleanWhitespace,
  generateRandomString,

  // array
  unique, 
  shuffle,
  chunk,
  flatten as flattenArray,
  take,
  drop,
  max,
  min,

  // object
  deepClone, 
  deepMerge,
  pick,
  omit,
  get,
  set,
  flattenObject,

  // date
  formatDate,
  startOfDay,
  endOfDay,
  addDays,

  // format
  formatCurrency,
  formatFileSize,
  formatDuration,

  // math
  clamp,
  median,
  distance,
  binomial,
  randomInt,

  // validation
  isValidEmail,

  // crypto
  generateUUID,
  toBase64,
  fromBase64
} from 'dev-utils-plus';

// Enhanced string utilities
capitalize('hello world'); // "Hello world"
toCamelCase('hello-world'); // "helloWorld"
toPascalCase('hello-world'); // "HelloWorld"
escapeHtml('<div>Hello & world</div>'); // "&lt;div&gt;Hello &amp; world&lt;/div&gt;"
cleanWhitespace('  hello   world  '); // "hello world"

// Enhanced array utilities
unique([1, 2, 2, 3]); // [1, 2, 3]
take([1, 2, 3, 4, 5], 3); // [1, 2, 3]
drop([1, 2, 3, 4, 5], 2); // [3, 4, 5]
max([1, 5, 3, 9, 2]); // 9

// Enhanced math utilities
clamp(10, 0, 5); // 5
median([1, 2, 3, 4]); // 2.5
distance(0, 0, 3, 4); // 5
binomial(5, 2); // 10
randomInt(1, 10); // Random integer between 1-10

// Existing utilities work the same
formatCurrency(1234.56, 'USD'); // "$1,234.56"
isValidEmail('user@example.com'); // true
```

## Modules & APIs

- String (`src/string`)
  - **Case conversion**: `capitalize`, `toCamelCase`, `toKebabCase`, `toSnakeCase`, `toPascalCase`, `toTitleCase`
  - **Text manipulation**: `truncate`, `stripHtml`, `wordCount`, `reverse`, `isPalindrome`
  - **Utility**: `generateRandomString`, `cleanWhitespace`, `escapeHtml`, `unescapeHtml`
  - **Validation**: `isAlpha`, `isAlphanumeric`
  - **Formatting**: `padString`
  - Note: email validation is in the Validation module (`isValidEmail`).

- Array (`src/array`)
  - **Core utilities**: `unique`, `shuffle`, `groupBy`, `chunk`, `flatten` (with depth control)
  - **Set operations**: `intersection`, `difference`
  - **Sorting & filtering**: `sortBy`, `compact`
  - **Access & manipulation**: `first`, `last`, `take`, `drop`
  - **Analysis**: `countBy`, `max`, `min`
  - **Generation**: `range`

- Object (`src/object`)
  - `deepClone`, `deepMerge`, `pick`, `omit`, `get`, `set`
  - `flattenObject`, `invert`, `fromEntries`, `entries`, `mapValues`

- Date (`src/date`)
  - `formatDate`, `startOfDay`, `endOfDay`, `addDays`, `subtractDays`
  - `daysDifference`, `isToday`, `isPast`, `isFuture`, `getAge`, `getWeekNumber`, `isLeapYear`, `getDaysInMonth`, `parseDate`, `getRelativeTime`

- Format (`src/format`)
  - `formatNumber`, `formatCurrency`, `formatPercentage`, `formatFileSize`
  - `formatDuration`, `formatPhoneNumber`, `formatCreditCard`, `formatSSN`
  - `formatPostalCode`, `formatName`, `formatSentence`, `formatTitle`, `formatSlug`, `formatOrdinal`

- Math (`src/math`)
  - **Basic operations**: `clamp`, `lerp`, `mapRange`, `isBetween`, `roundTo`, `percentage`
  - **Advanced math**: `factorial`, `gcd`, `lcm`, `nthRoot`, `binomial`
  - **Number theory**: `isPrime`, `generatePrimes`
  - **Statistics**: `sum`, `average`, `median`, `mode`, `standardDeviation`, `variance`
  - **Random generation**: `randomInt`, `randomFloat`
  - **Geometry**: `distance`, `degreesToRadians`, `radiansToDegrees`

- Validation (`src/validation`)
  - `isValidEmail`, `isValidUrl`, `isValidPhoneNumber`, `isValidCreditCard`
  - `isValidPassword`, `isValidIPv4`, `isValidIPv6`, `isValidPostalCode`, `isValidSSN`
  - `isValidDate`, `isValidTime`, `isValidHexColor`, `isValidJSON`, `isValidUUID`
  - `validateSchema<T>(obj, schema)`

- Crypto (`src/crypto`)
  - `randomString`, `randomNumber`, `generateUUID`
  - `toBase64`, `fromBase64`, `toBase64Url`, `fromBase64Url`
  - `simpleHash`, `checksum`, `randomHex`, `randomAlphanumeric`, `randomNumeric`
  - `generatePassword({ length, includeUppercase, includeLowercase, includeNumbers, includeSymbols })`

## TypeScript
- Strict types by default; `.d.ts` generated on build.
- Tree-shakable with modern bundlers; import only what you need.

## Scripts
- `npm run dev`: tsc --watch
- `npm run build`: compile to `dist`
- `npm test`: run Jest
- `npm run lint`: ESLint on `src/**/*.ts`

## CI / Release
- CI: lint, test, build on push/PR (`.github/workflows/ci.yml`).
- Release: publish to npm and create GitHub Release on tags `v*.*.*` (`.github/workflows/release.yml`).
  - Set `NPM_TOKEN` in repo Settings → Secrets and variables → Actions.

## License
MIT 