const test = require('ava')
const convert = require('./../')

test('convert', (t) => {
  t.deepEqual(convert('Emphasis, aka italics, with *asterisks* or _underscores_.'), [
    {
      'tag': 'p',
      'children': [
        'Emphasis, aka italics, with ',
        {
          'tag': 'em',
          'children': [
            'asterisks'
          ]
        },
        ' or ',
        {
          'tag': 'em',
          'children': [
            'underscores'
          ]
        },
        '.'
      ]
    }
  ])
})
