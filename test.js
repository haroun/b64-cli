import test from 'tape'
import execa from 'execa'

test('base64 decode without options', async assert => {
  const message = 'data should be decoded'

  const {stdout} = await execa('./cli.js', ['dGVzdA=='])

  const actual = stdout
  const expected = 'test'

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 encode', async assert => {
  const message = 'data should be encoded'

  const {stdout} = await execa('./cli.js', ['--encode', 'test'])

  const actual = stdout
  const expected = 'dGVzdA=='

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 decode', async assert => {
  const message = 'data should be decoded'

  const {stdout} = await execa('./cli.js', ['--decode', 'dGVzdA=='])

  const actual = stdout
  const expected = 'test'

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 encode option order', async assert => {
  const message = 'data should be encoded'

  const {stdout} = await execa('./cli.js', ['test', '--encode'])

  const actual = stdout
  const expected = 'dGVzdA=='

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 decode option order', async assert => {
  const message = 'data should be decoded'

  const {stdout} = await execa('./cli.js', ['dGVzdA==', '--decode'])

  const actual = stdout
  const expected = 'test'

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 encode alias', async assert => {
  const message = 'data should be encoded'

  const {stdout} = await execa('./cli.js', ['-e', 'test'])

  const actual = stdout
  const expected = 'dGVzdA=='

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 decode alias', async assert => {
  const message = 'data should be decoded'

  const {stdout} = await execa('./cli.js', ['-d', 'dGVzdA=='])

  const actual = stdout
  const expected = 'test'

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 encode alias order', async assert => {
  const message = 'data should be encoded'

  const {stdout} = await execa('./cli.js', ['test', '-e'])

  const actual = stdout
  const expected = 'dGVzdA=='

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 decode alias order', async assert => {
  const message = 'data should be decoded'

  const {stdout} = await execa('./cli.js', ['dGVzdA==', '-d'])

  const actual = stdout
  const expected = 'test'

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 encode stdin', async assert => {
  const message = 'stdin should be encoded'

  const {stdout} = await execa('./cli.js', ['--encode'], {input: 'test'})

  const actual = stdout
  const expected = 'dGVzdA=='

  assert.equal(actual, expected, message)

  assert.end()
})

test('base64 decode stdin', async assert => {
  const message = 'stdin should be decoded'

  const {stdout} = await execa('./cli.js', ['--decode'], {input: 'dGVzdA=='})

  const actual = stdout
  const expected = 'test'

  assert.equal(actual, expected, message)

  assert.end()
})
