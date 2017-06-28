#!/usr/bin/env node
'use strict'
const meow = require('meow')
const stdin = require('get-stdin')

const cli = meow(`$ b64 --help

  Usage
    $ b64 <option> <string>

  Options:
    -e, --encode Encode
    -d, --decode Decode

  Example
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
  boolean: [
    'encode',
    'decode'
  ],
  alias: {
    e: 'encode',
    d: 'decode'
  }
})

const input = cli.input[0]
const flags = cli.flags

function init(data, mode = {decode: true, encode: false}) {
  const from = (mode.e || mode.encode) === true ? 'ascii' : 'base64'
  const to = (mode.e || mode.encode) === true ? 'base64' : 'ascii'
  console.log(Buffer.from(data, from).toString(to))
}

if (input) {
  init(input, flags)
} else {
  stdin().then(data => init(data, flags))
}
