# 📝 telegraph.md
[![NPM Version](https://img.shields.io/npm/v/telegraph.md.svg?style=flat-square)](https://www.npmjs.com/package/telegraph.md)
[![Build Status](https://img.shields.io/travis/telegraf/telegraph.md.svg?branch=master&style=flat-square)](https://travis-ci.org/telegraf/telegraph.md)

Markdown powered pages for [Telegra.ph](http://telegra.ph/api)

## Installation

```js
$ npm install telegraph.md --save
```

## Example

```js
const md = require('telegraph.md')
const nodes = md('Emphasis, aka italics, with *asterisks* or _underscores_.')
// [
//   {
//     "tag": "p",
//     "children": [
//       "Emphasis, aka italics, with ",
//       {
//         "tag": "em",
//         "children": [
//           "asterisks"
//         ]
//       },
//       " or ",
//       {
//         "tag": "em",
//         "children": [
//           "underscores"
//         ]
//       },
//       "."
//     ]
//   }
// ]
```
