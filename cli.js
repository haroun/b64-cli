#!/usr/bin/env node

const meow = require('meow')
const getStdin = require('get-stdin')

const cli = meow(`$ b64 --help

  Usage
    $ b64 [--encode|--decode] <string>
    $ echo <string> | b64

  Options
    -e, --encode Encode
    -d, --decode Decode

  Examples
    $ b64 --encode 'test'
    dGVzdA==

    $ b64 -e 'test'
    dGVzdA==

    $ b64 'dGVzdA=='
    test

    $ b64 --decode 'dGVzdA=='
    test

    $ echo 'dGVzdA==' | b64
    test
`, {
  flags: {
    encode: {
      type: 'boolean',
      alias: 'e',
      default: false
    },
    decode: {
      type: 'boolean',
      alias: 'd',
      default: true
    }
  }
})

const {input: [input], flags} = cli

if (!input && process.stdin.isTTY) {
  console.error('Please specify text to decode/encode')
  process.exit(1)
}

const init = (data, mode = {decode: true, encode: false}) => {
  const from = (mode.e || mode.encode) === true ? 'ascii' : 'base64'
  const to = (mode.e || mode.encode) === true ? 'base64' : 'ascii'
  console.log(Buffer.from(data, from).toString(to))
}

(async () => {
  if (input) {
    init(input, flags)
  } else {
    const data = await getStdin()
    init(data, flags)
  }
})()
