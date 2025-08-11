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
  generateRandomString,

  // array
  unique, 
  shuffle,
  chunk,
  flatten as flattenArray,

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

  // validation
  isValidEmail,

  // crypto
  generateUUID,
  toBase64,
  fromBase64
} from 'dev-utils-plus';

capitalize('hello world'); // "Hello world"
toCamelCase('hello-world'); // "helloWorld"
unique([1, 2, 2, 3]); // [1, 2, 3]
formatCurrency(1234.56, 'USD'); // "$1,234.56"
median([1, 2, 3, 4]); // 2.5
isValidEmail('user@example.com'); // true
```

## Modules & APIs

- String (`src/string`)
  - `capitalize`, `toCamelCase`, `toKebabCase`, `toSnakeCase`
  - `truncate`, `stripHtml`, `wordCount`, `reverse`, `isPalindrome`
  - `generateRandomString`
  - Note: email validation is in the Validation module (`isValidEmail`).

- Array (`src/array`)
  - `unique`, `shuffle`, `groupBy`, `chunk`, `flatten` (arrays), `intersection`, `difference`, `sortBy`, `range`, `countBy`, `compact`, `first`, `last`

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
  - `clamp`, `lerp`, `mapRange`, `percentage`, `factorial`, `gcd`, `lcm`
  - `isPrime`, `generatePrimes`, `sum`, `average`, `median`, `mode`, `standardDeviation`, `variance`, `randomInt`, `randomFloat`

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